function useCode() {

  const twoFaCode = Math.floor(100000 + Math.random() * 900000).toString();

  return { twoFaCode };
}

export default useCode