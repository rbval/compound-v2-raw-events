import { CToken as CTokenTemplate } from '../generated/templates'
import {
  NewPendingImplementationV1,
  NewImplementationV1,
  NewPendingAdminV1,
  NewAdminV1,
  FailureV1
} from "../generated/Unitroller/Unitroller"
import {
  AccrueInterestV1,
  AccrueInterestV2,
  NewReserveFactorV1,
} from '../generated/templates/CToken/CToken'
import { MarketListedV1 } from "../generated/Comptroller/Comptroller";

import { NewPendingImplementationV1Event, NewImplementationV1Event, NewPendingAdminV1Event, NewAdminV1Event, FailureV1Event, MarketListedV1Event, AccrueInterestV1Event, AccrueInterestV2Event, NewReserveFactorV1Event } from "../generated/schema"

export function handleNewPendingImplementationV1(
  event: NewPendingImplementationV1
): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newPendingImplementationEntity = new NewPendingImplementationV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleNewImplementationV1(event: NewImplementationV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newImplementationEntity = new NewImplementationV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleNewPendingAdminV1(event: NewPendingAdminV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newPendingAdminEntity = new NewPendingAdminV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleNewAdminV1(event: NewAdminV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newAdminEntity = new NewAdminV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleFailureV1(event: FailureV1): void { 
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let failureEntity = new FailureV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleMarketListedV1(event: MarketListedV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let marketListedEntity = new MarketListedV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleAccrueInterestV1(event: AccrueInterestV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let handleAccrueInterest0Entity = new AccrueInterestV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleAccrueInterestV2(event: AccrueInterestV2): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let handleAccrueInterest1Entity = new AccrueInterestV2Event(`${transactionHash.toHexString()}-${logIndex}`);
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

export function handleNewReserveFactorV1(event: NewReserveFactorV1): void {
  let transactionHash = event.transaction.hash;
  let contractAddress = event.address;
  let blockNumber = event.block.number;
  let blockTime = event.block.timestamp;
  let logIndex = event.logIndex;
  let newReserveFactorEntity = new NewReserveFactorV1Event(`${transactionHash.toHexString()}-${logIndex}`);
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
