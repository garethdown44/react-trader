export default function rand(min, max, scale) {
  return ((Math.random() * (max - min)) + min).toFixed(scale);
}