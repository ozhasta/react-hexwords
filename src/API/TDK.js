/**
 * sozluk.gov.tr (a part of the Turkish Language Institute - TDK) is a
 * government website, and its API is not designed to be used by the public.
 * Due to this reason, the words and their meanings have been pre-collected
 * and transferred to a JSON file. I don't want to make queries to the API
 * again, but you can see how I accomplished this on the below.
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
        .replace(/[ıi]/g, "1")
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

// Takes 15 - 30 seconds
console.log("Please wait...")
console.log(wordsListArrWithMeanings)

// wordsListArrWithMeanings constant exported as wordsWithMeanings.json
