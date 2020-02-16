function c() {
  const text = "now:";
  return text + Date.now();
}

export function a(text) {
  return text + c();
}

export function b() {
  return 'This is function b';
}
