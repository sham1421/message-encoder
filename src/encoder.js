// Base64 encoding
export function encodeBase64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return 'Invalid input';
  }
}

// Caesar Cipher encoding (shift of 3 by default)
export function encodeCaesar(str, shift = 3) {
  return str.replace(/[a-z]/gi, (char) => {
    const base = char <= 'Z' ? 65 : 97;
    return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
  });
}
