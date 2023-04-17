const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(prop) {
    this.property = prop;
    this.latArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      let messArr = message.toUpperCase().split("");
      let keyArr = key.toUpperCase().split("");
      let messIndex = [];
      let keyIndex = [];
      messArr.forEach((element, index) => {
        for (let i = 0; i < this.latArr.length; i++) {
          if (element === this.latArr[i]) {
            messIndex.push(i);
            delete messArr[index];
          }
        }
      });
      keyArr.forEach((element) => {
        for (let i = 0; i < this.latArr.length; i++) {
          if (element === this.latArr[i]) {
            keyIndex.push(i);
          }
        }
      });
      let keyFullIndex = [];
      for (let i = 0; i < Math.ceil(messIndex.length / keyIndex.length); i++) {
        keyFullIndex = keyFullIndex.concat(keyIndex);
      }
      keyFullIndex = keyFullIndex.slice(0, messIndex.length);
      let result = [];
      for (let i = 0; i < messIndex.length; i++) {
        result.push((messIndex[i] + keyFullIndex[i]) % 26);
      }

      result = result.map((element) => {
        return (element = this.latArr[element]);
      });
      result.forEach((element) => {
        for (let i = 0; i < messArr.length; i++) {
          if (messArr[i] === undefined) {
            messArr[i] = element;
            break;
          }
        }
      });
      if (this.property === false) {
        return (messArr = messArr.reverse()).join("");
      } else {
        return messArr.join("");
      }
    }
  }
  decrypt(encryptMessage, key) {
    if (encryptMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    } else {
      let messArr = encryptMessage.toUpperCase().split("");
      let keyArr = key.toUpperCase().split("");
      let messIndex = [];
      let keyIndex = [];
      messArr.forEach((element, index) => {
        for (let i = 0; i < this.latArr.length; i++) {
          if (element === this.latArr[i]) {
            messIndex.push(i);
            delete messArr[index];
          }
        }
      });
      keyArr.forEach((element) => {
        for (let i = 0; i < this.latArr.length; i++) {
          if (element === this.latArr[i]) {
            keyIndex.push(i);
          }
        }
      });
      let keyFullIndex = [];
      for (let i = 0; i < Math.ceil(messIndex.length / keyIndex.length); i++) {
        keyFullIndex = keyFullIndex.concat(keyIndex);
      }
      keyFullIndex = keyFullIndex.slice(0, messIndex.length);
      let result = [];
      for (let i = 0; i < messIndex.length; i++) {
        let dif = messIndex[i] - keyFullIndex[i];
        if (dif >= 0) {
          result.push(dif % 26);
        } else {
          result.push(dif + 26);
        }
      }
      result = result.map((element) => {
        return (element = this.latArr[element]);
      });
      result.forEach((element) => {
        for (let i = 0; i < messArr.length; i++) {
          if (messArr[i] === undefined) {
            messArr[i] = element;
            break;
          }
        }
      });
      if (this.property === false) {
        return (messArr = messArr.reverse()).join("");
      } else {
        return messArr.join("");
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
