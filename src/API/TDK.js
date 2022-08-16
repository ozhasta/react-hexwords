/**
 * sozluk.gov.tr (part of Turkish Language Institute (TDK)) is a government
 * web page and it's API not designed to be used public. For this reason,
 * the words and their meanings have been taken beforehand
 * and transferred to the json file. I don't want to query the API again.
 * But you can see how I did this in this page blow.
 */

async function getHexLikeWords() {
  const response = await fetch("https://sozluk.gov.tr/autocomplete.json")
  const words = await response.json()

  const HEX_LIKE_CHARS = "abcdefgğıioösştz".split("")

  const result = words
    .map((word) => word.madde.toLocaleLowerCase("tr"))
    .filter((word) => [3, 4, 6, 8].includes(word.length))
    .filter((word) => word.split("").every((letter) => HEX_LIKE_CHARS.includes(letter)))
    .map((word) => [
      word,
      word
        .replace(/[gğ]/g, "6")
        .replace(/[iı]/g, "1")
        .replace(/[oö]/g, "0")
        .replace(/[sş]/g, "5")
        .replace(/t/g, "7")
        .replace(/z/g, "2")
        .toLocaleUpperCase("tr"),
    ])

  return result
}

async function getMeaningsListByWord(query) {
  const tempList = []

  try {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${query}`)
    const data = await response.json()

    for (const element of data) {
      const anlamlarListe = element.anlamlarListe

      for (const element of anlamlarListe) {
        tempList.push(element.anlam)
      }
    }
  } catch (error) {
    console.warn("query:", query, "error:", error)
  }

  return tempList
}

function generateWordsListArrWithMeanings() {
  const list = hexLikeWordsArray.map(async (word, i) => {
    const meaningsArr = await getMeaningsListByWord(word[0].toLocaleLowerCase("tr"))

    return {
      id: i,
      word: word[0].toLocaleUpperCase("tr"),
      hex: word[1],
      meanings: meaningsArr,
    }
  })

  return list
}

const hexLikeWordsArray = await getHexLikeWords()
const wordsListArrWithMeanings = await Promise.all(generateWordsListArrWithMeanings())

// Takes 15 - 20 seconds
console.log(wordsListArrWithMeanings)

// wordsListArrWithMeanings constant exported as wordsWithMeanings.json
