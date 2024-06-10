function generateSolution(nums){
    const result =[];
    function backtrack(start, path){
        result.push([...path]);
        for(let i=start; i<nums.length; i++){
            path.push(nums[i]);
            backtrack(i+1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
}
