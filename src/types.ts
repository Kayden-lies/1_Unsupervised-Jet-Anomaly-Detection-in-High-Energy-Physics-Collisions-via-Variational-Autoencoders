export type Status='unknown'|'pending'|'ready'|'error';
export interface Dataset{id:string;name:string;source:string;events:number|null;features:number|null;labels:'available'|'none'|'unknown';preprocessing:Status;validation:Status}
export interface ModelConfig{latentDim:number;beta:number;hidden:number[];batchSize:number;lr:number;epochs:number;scoring:'mse'|'mse-std'|'kl-recon'}
export interface EvalMetrics{rocAuc:number|null;sigEffAtBgRej:number|null;fpr:number|null;scoreStability:number|null;shiftDegradation:number|null;massDependence:number|null}
export type Group='A'|'B'|'C'|'D';
export type RunStatus='planned'|'running'|'completed'|'failed';
export interface ExperimentRun{id:string;group:Group;name:string;status:RunStatus;config:string;metrics:EvalMetrics|null}
export interface Ctx{ds:Dataset;datasets:Dataset[];setDs:(id:string)=>void;cfg:ModelConfig;setCfg:(c:ModelConfig)=>void;runs:ExperimentRun[]}
