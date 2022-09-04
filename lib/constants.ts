type Moods = {
  [key: string]: string,
}

export const moods: Moods = {
  "lazy": "emoji-sleepy-face",
  "bored": "emoji-yawning-face",
  "sad": "emoji-sad-but-relieved-face",
  "hungry": "emoji-dizzy-face",
  "happy": "emoji-smiling-face-with-smiling-eyes",
  "loved": "emoji-smiling-face-with-hearts",
  "stress": "emoji-weary-face",
  "depressed": "emoji-scrunched-face",
  "angry": "emoji-angry-face",
}

export const foods = [
  "burger",
  "coffee and tea",
  "seafood",
  "sunda",
  "korean",
  "western",
  "indonesian",
  "italian",
  "japanese",
  "peranakan",
]

export const api_base_url = process.env.API_BASE_URL
