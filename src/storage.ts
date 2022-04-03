
export default {
  get(k: string): string {
    return k
  },
  set(k: string, value: string, s: boolean): void {
    console.log(k, value, s)
  }
}
