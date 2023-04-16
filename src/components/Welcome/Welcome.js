import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './welcome.css'
import { useState } from 'react'
import Rice from '../../assets/Rice.jpeg'
import Soup from '../../assets/Soup.jpeg'
import VegetableSoup from '../../assets/Vegetable-Soup.jpg'
import Chicken from '../../assets/Chicken.jpeg'
import Chops from '../../assets/Chops.jpg'
import Pizza from '../../assets/Pizza.jpeg'
import Egg from '../../assets/Egg.jpeg'
import OkraSoup from '../../assets/Okra-Soup.jpg'
import Shawarma from '../../assets/Shawarma.jpg'
import FriedRice from '../../assets/Fried-Rice.jpeg'
import Cake from '../../assets/Cake.jpeg'
import JollofRice from '../../assets/Jollof-Rice.jpg'
import MoiMoi from '../../assets/Moi-Moi.jpg'
import OfeNsala from '../../assets/Ofe-Nsala.jpg'
import Plantain from '../../assets/Plantain.jpeg'
import PoundedYam from '../../assets/Pounded-Yam.jpeg'
import Suya from '../../assets/Suya.jpeg'
import Snacks from '../../assets/Snacks.jpeg'
import { FcCancel } from 'react-icons/fc'

const Welcome = () => {
  const [show, setShow] = useState(false);
  const [food, setFood] = useState('');
  const [soup, setSoup] = useState(false);
  const [vegetableSoup, setVegetableSoup] = useState(false);
  const [chicken, setChicken] = useState(false);
  const [chops, setChops] = useState(false);
  const [pizza, setPizza] = useState(false);
  const [egg, setEgg] = useState(false);
  const [okraSoup, setOkraSoup] = useState(false);
  const [shawarma, setShawarma] = useState(false);
  const [friedRice, setFriedRice] = useState(false);
  const [cake, setCake] = useState(false);
  const [jollofRice, setJollofRice] = useState(false);
  const [moimoi, setMoimoi] = useState(false);
  const [ofeNsala, setOfeNsala] = useState(false);
  const [plantain, setPlantain] = useState(false);
  const [poundedYam, setPoundedYam] = useState(false);
  const [suya, setSuya] = useState(false);
  const [snacks, setSnacks] = useState(false);

  const handleChange = event => {
    setFood(event.target.value);
  }

  const hideDropdown = () => {
    setCake(false);
    setChicken(false);
    setChops(false);
    setEgg(false);
    setFriedRice(false);
    setJollofRice(false);
    setMoimoi(false);
    setOfeNsala(false);
    setOkraSoup(false);
    setPizza(false);
    setPlantain(false);
    setShawarma(false);
    setShow(false);
    setSnacks(false);
    setSoup(false);
    setSuya(false);
    setVegetableSoup(false);
  }

  const showDropdown = () => {
    if (food === 'Rice' || food === 'rice' || food === 'RICE') {
      setShow(true);
    }
    else if (food === 'Soup' || food === 'soup' || food === 'SOUP') {
      setSoup(true);
    } 
    else if (food === 'Vegetable Soup' || food === 'vegetable soup' || food === 'VEGETABLE SOUP') {
      setVegetableSoup(true);
    } 
    else if (food === 'Chicken' || food === 'chicken' || food === 'CHICKEN') {
      setChicken(true);
    } 
    else if (food === 'Chops' || food === 'chops' || food === 'CHOPS') {
      setChops(true);
    } 
    else if (food === 'Pizza' || food === 'pizza' || food === 'PIZZA') {
      setPizza(true);
    } 
    else if (food === 'Pizza' || food === 'pizza' || food === 'PIZZA') {
      setPizza(true);
    } 
    else if (food === 'Egg' || food === 'egg' || food === 'EGG') {
      setEgg(true);
    } 
    else if (food === 'Okra Soup' || food === 'okra soup' || food === 'OKRA SOUP') {
      setOkraSoup(true);
    } 
    else if (food === 'Shawarma' || food === 'shawarma' || food === 'SHAWARMA') {
      setShawarma(true);
    } 
    else if (food === 'Fried Rice' || food === 'fried rice' || food === 'FRIED RICE') {
      setFriedRice(true);
    } 
    else if (food === 'Cake' || food === 'cake' || food === 'CAKE') {
      setCake(true);
    } 
    else if (food === 'Jollof Rice' || food === 'jollof rice' || food === 'JOLLOF RICE') {
      setJollofRice(true);
    } 
    else if (food === 'Moi moi' || food === 'moi moi' || food === 'MOI MOI') {
      setMoimoi(true);
    } 
    else if (food === 'Ofe Nsala' || food === 'ofe nsala' || food === 'OFE NSALA') {
      setOfeNsala(true);
    } 
    else if (food === 'Plantain' || food === 'plantain' || food === 'PLANTAIN') {
      setPlantain(true);
    } 
    else if (food === 'Pounded Yam' || food === 'pounded yam' || food === 'POUNDED YAM') {
      setPoundedYam(true);
    } 
    else if (food === 'Suya' || food === 'suya' || food === 'SUYA') {
      setSuya(true);
    } 
    else if (food === 'Snacks' || food === 'snacks' || food === 'SNACKS') {
      setSnacks(true);
    } 
    else {
      alert("This Food is not available");
    }
  }


  return (
    <div className='text-center container my-5 welcome-container'>
      <div className='d-flex flex-end align-items-end' onClick={hideDropdown}>
      <FcCancel className='cancel-icon' size={40}/>
     </div>
     <div className='mt-4'>
      <p>You are Welcome to the Wedding Reception of</p>
     </div>
     <div>
      <h3>Mr & Mrs MOUAU</h3>
     </div>
     <div className='mt-4'>
      <p>What would you like to eat?</p>
     </div>

     <div className='d-flex flex-column text-center align-items-center' >
      <input
      placeholder='Which Food do you need?'
      name='food'
      value={food}
      onChange={handleChange}
      type='text'
      className='text-holder p-3' />
      <div className='mt-4 p-3 text-white button-check' onClick={showDropdown} >
        Check For Food</div>
     </div>
     {show ? (
          <Dropdown 
          image={Rice}
          name='Rice'/>
        ): null}
      {soup ? (
          <Dropdown 
          image={Soup}
          name='Soup'/>
        ): null}
       {vegetableSoup ? (
          <Dropdown 
          image={VegetableSoup}
          name='Vegetable Soup'/>
        ): null}
        {chicken ? (
          <Dropdown 
          image={Chicken}
          name='Chicken'/>
        ): null}
        {chops ? (
          <Dropdown 
          image={Chops}
          name='Chops'/>
        ): null}
        {pizza ? (
          <Dropdown 
          image={Pizza}
          name='Pizza'/>
        ): null}
        {egg ? (
          <Dropdown 
          image={Egg}
          name='Egg'/>
        ): null}
        {okraSoup ? (
          <Dropdown 
          image={OkraSoup}
          name='OkraSoup'/>
        ): null}
        {shawarma ? (
          <Dropdown 
          image={Shawarma}
          name='Shawarma'/>
        ): null}
        {friedRice ? (
          <Dropdown 
          image={FriedRice}
          name='Fried Rice'/>
        ): null}
        {cake ? (
          <Dropdown 
          image={Cake}
          name='Cake'/>
        ): null}
        {jollofRice ? (
          <Dropdown 
          image={JollofRice}
          name='Jollof Rice'/>
        ): null}
        {moimoi ? (
          <Dropdown 
          image={MoiMoi}
          name='Moi Moi'/>
        ): null}
        {ofeNsala ? (
          <Dropdown 
          image={OfeNsala}
          name='Ofe Nsala'/>
        ): null}
        {plantain ? (
          <Dropdown 
          image={Plantain}
          name='Plantain'/>
        ): null}
        {poundedYam ? (
          <Dropdown 
          image={PoundedYam}
          name='Pounded Yam and Egusi Soup'/>
        ): null}
        {suya ? (
          <Dropdown 
          image={Suya}
          name='Suya'/>
        ): null}
        {snacks ? (
          <Dropdown 
          image={Snacks}
          name='Snacks'/>
        ): null}
    </div>
  )
}

export default Welcome
