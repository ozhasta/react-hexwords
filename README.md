# Turkish HEXWORDS

> Instead of random colors, choose a valid hex color code from Turkish words.

---

![ScreenshotTurkishHexWords](https://user-images.githubusercontent.com/6636688/184557382-a647347a-4177-48b6-8fbd-e85cb41da15e.jpg)

---
## Live Demo

[Turkish HEXWORDS](https://turkish-hexwords.netlify.app/)

## Description

### What does this project do?

Letters (A-F) and numbers (0-9) used in hexadecimal can provide meaningful words (eg: BADASS -> #BADA55). There is a list of these (Turkish) meaningful words in the project, it visualizes the colors, there are alternative formats such as RGB and HSL besides the hex format of the color (came from [TheColorAPI](https://www.thecolorapi.com/docs)). It is also a fun project where we can look at the dictionary meanings of words (taken from [Turkish Language Institute (TDK)](https://www.sozluk.gov.tr/)[^1]).

<details>
  <summary>
    more...
  </summary>
  When using hex colors, we most often use the #R<sup>1</sup>R<sup>2</sup>G<sup>1</sup>G<sup>2</sup>B<sup>1</sup>B<sup>2</sup> format (6 characters). If we use it in the #R<sup>1</sup>R<sup>2</sup>G<sup>1</sup>G<sup>2</sup>B<sup>1</sup>B<sup>2</sup>A<sup>1</sup>A<sup>2</sup> format, we add the alpha channel (8 characters). When R<sup>1</sup> = R<sup>2</sup> and G<sup>1</sup> = G<sup>2</sup> and B<sup>1</sup> = B<sup>2</sup>, we can write it in #R<sup>1</sup>G<sup>1</sup>B<sup>1</sup> format (3 characters) (Ex: #5522EE -> #52E). If we want to add the alpha channel to the short version, we can write it as #R<sup>1</sup>G<sup>1</sup>B<sup>1</sup>A<sup>1</sup> for short (4 characters).
</details>

### Why?

- Trying to sharpen my React skills. I used useEffect, useState, useMemo hooks in this project.
- I started this project via Create React App. After hearing about Vite, I decided to give it a try and migrated the project to Vite.
- Used 2 different API's
  1. [TheColorAPI](https://www.thecolorapi.com/docs)
  2. [Turkish Language Institute (TDK)](https://www.sozluk.gov.tr/)[^1]

---

## ⌨ Installation

| Command                                                   | Action                                       |
| :-------------------------------------------------------- | :------------------------------------------- |
| `git clone https://github.com/b0tm0de/react-hexwords.git` | Clone the repo                               |
| `cd react-hexwords`                                       | Change directory to root of project          |
| `npm install`                                             | Install dependencies                         |
| `npm run dev`                                             | Start local development server               |
| `npm run build`                                           | Build your production site to `./dist/`      |
| `npm run preview`                                         | Preview your build locally, before deploying |

## 🙏 Acknowledgments

- This is where I get inspiration.

  > [#HEXWORDS](https://hexwords.netlify.app/)

- Here is the piece of code that I slightly modified and used in this project to separate the text color from the background color.
  > [lightOrDark.js](https://gist.github.com/stla/00d8d78c7daa8b774c484e5b6f5758ce)

[^1]: sozluk.gov.tr (part of Turkish Language Institute (TDK)) is a government web page and it's API not designed to be used public. For this reason, the words and their meanings have been taken beforehand and transferred to the json file. I don't want to query the API again. But you can see how I did this in the source code. `/src/API/TDK.js`
