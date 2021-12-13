import { CToken as CTokenTemplate } from '../generated/templates'
import {
  NewPendingImplementation,
  NewImplementation,
  NewPendingAdmin,
  NewAdmin,
  Failure
} from "../generated/Unitroller/Unitroller"
import {
  AccrueInterest as AccrueInterest0,
  AccrueInterest1,
  NewReserveFactor,
} from '../generated/templates/CToken/CToken'
import { MarketListed } from "../generated/Comptroller12/Comptroller12";

import { NewPendingImplementationV0Event, NewImplementationV0Event, NewPendingAdminV0Event, NewAdminV0Event, FailureV0Event, MarketListedV0Event, AccrueInterestV0Event, AccrueInterestV1Event, NewReserveFactorV0Event } from "../generated/schema"

export function handleNewPendingImplementation(
  event: NewPendingImplementation
): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newPendingImplementationEntity = new NewPendingImplementationV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let newPendingImplementation = event.params.newPendingImplementation;
  let oldPendingImplementation = event.params.oldPendingImplementation;

  newPendingImplementationEntity.transactionHash = transactionHash;
  newPendingImplementationEntity.contractAddress = contractAddress;
  newPendingImplementationEntity.blockNumber = blockNumber;
  newPendingImplementationEntity.blockTime = blockTime;
  newPendingImplementationEntity.logIndex = logIndex;
  newPendingImplementationEntity.newPendingImplementation = newPendingImplementation;
  newPendingImplementationEntity.oldPendingImplementation = oldPendingImplementation;
  newPendingImplementationEntity.save();
}

export function handleNewImplementation(event: NewImplementation): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newImplementationEntity = new NewImplementationV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let newImplementation = event.params.newImplementation;
  let oldPendingImplementation = event.params.oldImplementation;

  newImplementationEntity.transactionHash = transactionHash;
  newImplementationEntity.contractAddress = contractAddress;
  newImplementationEntity.blockNumber = blockNumber;
  newImplementationEntity.blockTime = blockTime;
  newImplementationEntity.logIndex = logIndex;
  newImplementationEntity.newImplementation = newImplementation;
  newImplementationEntity.oldImplementation = oldPendingImplementation;
  newImplementationEntity.save();
}

export function handleNewPendingAdmin(event: NewPendingAdmin): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newPendingAdminEntity = new NewPendingAdminV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let newPendingAdmin = event.params.newPendingAdmin;
  let oldPendingAdmin = event.params.oldPendingAdmin;

  newPendingAdminEntity.transactionHash = transactionHash;
  newPendingAdminEntity.contractAddress = contractAddress;
  newPendingAdminEntity.blockNumber = blockNumber;
  newPendingAdminEntity.blockTime = blockTime;
  newPendingAdminEntity.logIndex = logIndex;
  newPendingAdminEntity.newPendingAdmin = newPendingAdmin;
  newPendingAdminEntity.oldPendingAdmin = oldPendingAdmin;
  newPendingAdminEntity.save();
}

export function handleNewAdmin(event: NewAdmin): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newAdminEntity = new NewAdminV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let newAdmin = event.params.newAdmin;
  let oldAdmin = event.params.oldAdmin;

  newAdminEntity.transactionHash = transactionHash;
  newAdminEntity.contractAddress = contractAddress;
  newAdminEntity.blockNumber = blockNumber;
  newAdminEntity.blockTime = blockTime;
  newAdminEntity.logIndex = logIndex;
  newAdminEntity.newAdmin = newAdmin;
  newAdminEntity.oldAdmin = oldAdmin;
  newAdminEntity.save();  
}

export function handleFailure(event: Failure): void { 
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let failureEntity = new FailureV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let detail = event.params.detail;
  let error = event.params.error;
  let info = event.params.info;

  failureEntity.transactionHash = transactionHash;
  failureEntity.contractAddress = contractAddress;
  failureEntity.blockNumber = blockNumber;
  failureEntity.blockTime = blockTime;
  failureEntity.logIndex = logIndex;
  failureEntity.detail = detail;
  failureEntity.error = error;
  failureEntity.info = info;
  failureEntity.save();
}

export function handleMarketListed(event: MarketListed): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let marketListedEntity = new MarketListedV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let cToken = event.params.cToken;

  CTokenTemplate.create(cToken);

  marketListedEntity.transactionHash = transactionHash;
  marketListedEntity.contractAddress = contractAddress;
  marketListedEntity.blockNumber = blockNumber;
  marketListedEntity.blockTime = blockTime;
  marketListedEntity.logIndex = logIndex;
  marketListedEntity.cToken = cToken;
  marketListedEntity.save();
}

export function handleAccrueInterest0(event: AccrueInterest0): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let handleAccrueInterest0Entity = new AccrueInterestV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let borrowIndex = event.params.borrowIndex;
  let interestAccumulated = event.params.interestAccumulated;
  let totalBorrows = event.params.totalBorrows;

  handleAccrueInterest0Entity.transactionHash = transactionHash;
  handleAccrueInterest0Entity.contractAddress = contractAddress;
  handleAccrueInterest0Entity.blockNumber = blockNumber;
  handleAccrueInterest0Entity.blockTime = blockTime;
  handleAccrueInterest0Entity.logIndex = logIndex;
  handleAccrueInterest0Entity.borrowIndex = borrowIndex;
  handleAccrueInterest0Entity.interestAccumulated = interestAccumulated;
  handleAccrueInterest0Entity.totalBorrows = totalBorrows;
  handleAccrueInterest0Entity.save();
}

export function handleAccrueInterest1(event: AccrueInterest1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let handleAccrueInterest1Entity = new AccrueInterestV1Event(`${transactionHash.toHexString()}-${logIndex}`);
  let borrowIndex = event.params.borrowIndex;
  let cashPrior = event.params.cashPrior;  
  let interestAccumulated = event.params.interestAccumulated;
  let totalBorrows = event.params.totalBorrows;

  handleAccrueInterest1Entity.transactionHash = transactionHash;
  handleAccrueInterest1Entity.contractAddress = contractAddress;
  handleAccrueInterest1Entity.blockNumber = blockNumber;
  handleAccrueInterest1Entity.blockTime = blockTime;
  handleAccrueInterest1Entity.logIndex = logIndex;
  handleAccrueInterest1Entity.borrowIndex = borrowIndex;
  handleAccrueInterest1Entity.cashPrior = cashPrior;
  handleAccrueInterest1Entity.interestAccumulated = interestAccumulated;
  handleAccrueInterest1Entity.totalBorrows = totalBorrows;
  handleAccrueInterest1Entity.save();
}

export function handleNewReserveFactor(event: NewReserveFactor): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newReserveFactorEntity = new NewReserveFactorV0Event(`${transactionHash.toHexString()}-${logIndex}`);
  let newReserveFactorMantissa = event.params.newReserveFactorMantissa;
  let oldReserveFactorMantissa = event.params.oldReserveFactorMantissa;

  newReserveFactorEntity.transactionHash = transactionHash;
  newReserveFactorEntity.contractAddress = contractAddress;
  newReserveFactorEntity.blockNumber = blockNumber;
  newReserveFactorEntity.blockTime = blockTime;
  newReserveFactorEntity.logIndex = logIndex;
  newReserveFactorEntity.newReserveFactorMantissa = newReserveFactorMantissa;
  newReserveFactorEntity.oldReserveFactorMantissa = oldReserveFactorMantissa;
  newReserveFactorEntity.save();  
}
