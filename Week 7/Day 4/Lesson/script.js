const getX = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(5);
      }, 2000);
    });
  };
  

    // const getX = async () => {
    //     setTimeout(() => {
    //         return Number(5)
    //     }, 2000);
    // }



  const getY = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(6);
      }, 3000);
    });
  };

//   function getXY() {
//     getX()
//       .then((resultX) => {
//         getY()
//           .then((resultY) => {
//             return resultX + resultY;
//           })
//           .then((sum) => {
//             console.log(sum);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   getXY()

async function getXY(){
    try {
        let x = await getX();
        let y = await getY();
        console.log(x+y)
    } catch (error) {
        console.log('error =>', error)
        
    }
    
}

getXY()