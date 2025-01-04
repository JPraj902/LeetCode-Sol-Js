function countPalindromicSubsequence(s) {
    const n = s.length, left = Array(26).fill(0), right = Array(26).fill(0);
    const charCodeA= 'a'.charCodeAt(0);
    for (const char of s) right[char.charCodeAt(0) - charCodeA]++;
    const uniquePalindromes = new Set();
    for (let i = 0; i < n; i++){
        const midCharIndex =s[i].charCodeAt(0) - charCodeA;
        right[midCharIndex]--;
        for (let charIndex = 0; charIndex < 26; charIndex++){
            if (left[charIndex] && right[charIndex] > 0){
                uniquePalindromes.add(String.fromCharCode(charIndex + charCodeA) + s[i] + String.fromCharCode(charIndex + charCodeA));
            }
        }
        left[midCharIndex]++;
    }
    return uniquePalindromes.size;
}