// const hashedId = Math.random().toString(16).slice(2)

// export default hashedId

export default function hash() {
  return Math.random().toString(16).slice(2)
}