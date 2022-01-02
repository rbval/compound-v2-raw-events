import { CToken as CTokenTemplate } from '../generated/templates'
import {
  NewPendingImplementation as NewPendingImplementationEventV1,
  NewImplementation as NewImplementationEventV1,
  NewPendingAdmin as NewPendingAdminEventV1,
  NewAdmin as NewAdminEventV1,
  Failure as FailureEventV1
} from "../generated/Unitroller/Unitroller"
import {
  AccrueInterest as AccrueInterestEventV1,
  AccrueInterest1 as AccrueInterestEventV2,
  NewReserveFactor as NewReserveFactorEventV1,
  BorrowCall as BorrowCallV1
} from '../generated/templates/CToken/CToken'
import { MarketListed as MarketListedEventV1 } from "../generated/Comptroller/Comptroller";

import { NewPendingImplementationV1Event, NewImplementationV1Event, NewPendingAdminV1Event, NewAdminV1Event, FailureV1Event, MarketListedV1Event, AccrueInterestV1Event, AccrueInterestV2Event, NewReserveFactorV1Event, BorrowV1Call } from "../generated/schema"

export function handleNewPendingImplementationV1Event(
  event: NewPendingImplementationEventV1
): void {
  let entity = new NewPendingImplementationV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;    
  entity.newPendingImplementation = event.params.newPendingImplementation;
  entity.oldPendingImplementation = event.params.oldPendingImplementation;
  entity.save();
}

export function handleNewImplementationV1Event(event: NewImplementationEventV1): void {
  let entity = new NewImplementationV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;  
  entity.newImplementation = event.params.newImplementation;
  entity.oldImplementation = event.params.oldImplementation;
  entity.save();
}

export function handleNewPendingAdminV1Event(event: NewPendingAdminEventV1): void {
  let entity = new NewPendingAdminV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;  
  entity.newPendingAdmin = event.params.newPendingAdmin;
  entity.oldPendingAdmin = event.params.oldPendingAdmin;
  entity.save();
}

export function handleNewAdminV1Event(event: NewAdminEventV1): void {
  let entity = new NewAdminV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;  
  entity.newAdmin = event.params.newAdmin;
  entity.oldAdmin = event.params.oldAdmin;
  entity.save();  
}

export function handleFailureV1Event(event: FailureEventV1): void { 
  let entity = new FailureV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.detail = event.params.detail;
  entity.error = event.params.error;
  entity.info = event.params.info;
  entity.save();
}

export function handleMarketListedV1Event(event: MarketListedEventV1): void {
  let entity = new MarketListedV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  CTokenTemplate.create(event.params.cToken);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.cToken = event.params.cToken;
  entity.save();
}

export function handleAccrueInterestV1Event(event: AccrueInterestEventV1): void {
  let entity = new AccrueInterestV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.borrowIndex = event.params.borrowIndex;
  entity.interestAccumulated = event.params.interestAccumulated;
  entity.totalBorrows = event.params.totalBorrows;
  entity.save();
}

export function handleAccrueInterestV2Event(event: AccrueInterestEventV2): void {
  let entity = new AccrueInterestV2Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.borrowIndex = event.params.borrowIndex;
  entity.cashPrior = event.params.cashPrior;
  entity.interestAccumulated = event.params.interestAccumulated;
  entity.totalBorrows = event.params.totalBorrows;
  entity.save();
}

export function handleNewReserveFactorV1Event(event: NewReserveFactorEventV1): void {
  let entity = new NewReserveFactorV1Event(`${event.transaction.hash.toHexString()}-${event.logIndex}`);
  entity.transactionHash = event.transaction.hash;
  entity.address = event.address;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.logIndex = event.logIndex;
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa;
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa;
  entity.save();  
}

export function handleBorrowV1Call(call: BorrowCallV1): void {
  let entity = new BorrowV1Call(`${call.transaction.hash.toHexString()}`);
  entity.transactionHash = call.transaction.hash;
  entity.address = call.to;
  entity.from = call.from;
  entity.to = call.to;
  entity.blockNumber = call.block.number;
  entity.blockTimestamp = call.block.timestamp;
  entity.borrowAmount = call.inputs.borrowAmount;
  entity.value0 = call.outputs.value0;
  entity.save();
}
