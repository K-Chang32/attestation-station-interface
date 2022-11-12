import { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { AttestationStationOptimismGoerliAddress } from "../../constants/addresses";
import AttestationStationABI from "../../constants/abi.json"

const AttestContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
`

const FormLabel = styled.label`
  box-sizing: border-box;
  color: rgb(32,35,39);
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  font-weight: 600;
`

const Input = styled.input`
  align-items: center;
  border: 1px solid #cbd5e0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px 0;
  outline-style: none;
  padding: 9px 12px;
  width: 420px;
`

const SubmitButton = styled.button`
  background-color: #ff0420;
  border: none;
  border-radius: 12px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  width: 100%;
  margin-top: 16px;
  padding: 0 24px;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    background-color: rgb(235, 0, 26);
  }
`

const Attest = () => {

  const [about, setAbout] = useState("")
  const [key, setKey] = useState("")
  const [value, setValue] = useState("")

  return (
    <AttestContainer>
      <FormLabel>ETH address</FormLabel>
      <Input 
        type="text" 
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Who's this attestation about?"
        value={about}
      />
      <FormLabel>Attestation key</FormLabel>
      <Input 
        type="text" 
        onChange={(e) => setKey(e.target.value)}
        placeholder="Attestation key" 
        value={key}
      />
      <FormLabel>Attestation value</FormLabel>
      <Input 
        type="text" 
        onChange={(e) => setValue(e.target.value)}
        placeholder="Attestation value" 
        value={value}
      />
      <SubmitButton>
        Make attestation
      </SubmitButton>
    </AttestContainer>
  )
}

export default Attest;