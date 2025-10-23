namespace LinterTest {

  interface Info {
    text: string,
    key: KEY
  }

  enum KEY {
    POS = 1,
    NEG = -1
  }

  const info: Info = { 
    text: "G`udetmvhsgBncd1 ", 
    key: KEY.POS
  }

  console.log(deCrypt(info.text, info.key));

  function deCrypt(_text: string, _key: number): string {
    let result: string = "";
    for (let i: number = 0; i < _text.length; i++){
      result += String.fromCharCode(_text.charCodeAt(i) + _key)
    }
    return result;
  }
  
  //F2 for renaming something in the whole document
  //Alt Shift F fixes formatting -> good for seeing missing curlyboys
  //cd LinterTest in terminal to change folder

}