const options = ['pi', 'pa', 'ti']

function makePlays(plays) {
  const arr = []
  for (let i = 0; i < plays; i++) {
    const pos = Math.floor((Math.random() * 3) )
    arr.push(options[pos])
  }
  return arr
}
// pa gana a pi
// pi gana a ti
// ti gana a pa
function cachipun(arr1, arr2) {
  const res = [0, 0]
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 'pi' && arr2[i] === 'pa') {
      res[1]++
    } else if (arr1[i] === 'pa' && arr2[i] === 'pi') {
      res[0]++
    }

    if (arr1[i] === 'pi' && arr2[i] === 'ti') {
      res[0]++
    } else if (arr1[i] === 'ti' && arr2[i] === 'pi') {
      res[1]++
    }

    if (arr1[i] === 'ti' && arr2[i] === 'pa') {
      res[0]++
    } else if (arr1[i] === 'pa' && arr2[i] === 'ti') {
      res[1]++
    }
  }

  return res
}

function game () {
  let player1 = makePlays(3)
  console.log(player1)
  let player2 = makePlays(3)
  console.log(player2)
  const res = cachipun(player1, player2)
  if (res[0] < res[1]){
    console.log('gano 2')
  } else if (res[0] > res[1]){
    console.log('gano 1')
  } else {
    console.log('empate')
  }
}

game()
