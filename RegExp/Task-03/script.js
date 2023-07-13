let writedText = prompt('Write two favorite words to switch their places');
let switchedPattern = writedText.replace(/(\1\w+)\s+(\2\w+)/, '$2 $1');

alert(switchedPattern);