var answer = 0;
    
my_string.split('').forEach(x => {
    if(x.match(/[0-9]/g)) answer += Number(x);
})

return answer;