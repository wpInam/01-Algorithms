function longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// Example usage:
const s1 = "AGGTAB";
const s2 = "GXTXAYB";
console.log("Length of LCS:", longestCommonSubsequence(s1, s2)); // Output: 4
