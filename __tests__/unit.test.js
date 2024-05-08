// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//test phonenumber functioon  
  describe('Test PhoneNumber ', () => {

    test('Test 1', () => {
      //True
      expect(isPhoneNumber('(111)111-1111')).toBe(true);
    });
  
    test('Test 2', () => {
      //True
      expect(isPhoneNumber('123-456-7890')).toBe(true);
    });
    test('Test 3', () => {
      //False
      expect(isPhoneNumber('0')).toBe(false);
    });
  
    test('Test 4', () => {
      //False
      expect(isPhoneNumber('111aaa')).toBe(false);
    });
  
  })
  
  //test email function
  describe('Tests Email', () => {

    test('Test 1', () => {
      //True
      expect(isEmail('aaa@aaa.aaa')).toBe(true);
    });
    test('Test 2', () => {
      //True
      expect(isEmail('1111@aaa.aaa')).toBe(true);
    });


  
    test('Test 3', () => {
        //False
      expect(isEmail('aaaaa')).toBe(false);
    });
    test('Test 4', () => {
      //False
      expect(isEmail('aaa@111.aaa')).toBe(false);
    });
  })
  
  //test strongpassword function
  describe('Test StrongPassword ', () => {
    test('Test 1', () => {
      //True
      expect(isStrongPassword('Aaaabbaa')).toBe(true);
    });
  
    test('Test 2', () => {
      //True
      expect(isStrongPassword('A_aa0a')).toBe(true);
    });
  
    test('Test 3', () => {
      //False
      expect(isStrongPassword('abb.')).toBe(false);
    });
  
    test('Test 4', () => {
      //False
      expect(isStrongPassword('0aaaaa')).toBe(false);
    });
  })
  
// test date function
  describe('Test Date', () => {

    test('Test 1', () => {
      //True
      expect(isDate('01/01/2000')).toBe(true);
    });
  
    test('Test 2', () => {
      //True
      expect(isDate('1/1/2000')).toBe(true);
    });
  
    test('Test 3', () => {
      //False
      expect(isDate('aaaa')).toBe(false);
    });
    test('Test 4', () => {
      //False
      expect(isDate('01-01-2000')).toBe(false);

    });

  })
  
 //test hex  color function   
  describe('Test  HexColor', () => {

    test('Test 1', () => {
      //True
      expect(isHexColor('#000000')).toBe(true);
    });
    test('Test 2', () => {
      //True
      expect(isHexColor('#FF0000')).toBe(true);
    });
  
    test('Test 3', () => {
      //False
      expect(isHexColor('aa')).toBe(false);
    });
    test('Test 4', () => {
      //False
      expect(isHexColor('#1')).toBe(false);

    });


  })
  
  