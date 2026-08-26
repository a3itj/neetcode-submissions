class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
        return false;
        

    const charMap = new Map();

    // Count character frequencies for the first string
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Decrement frequencies using the second string
    for (const char of t) {
        // If the character doesn't exist or its count is already 0, it's not an anagram
        if (!charMap.has(char) || charMap.get(char) === 0) {
            return false;
        }
        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
    }
}
