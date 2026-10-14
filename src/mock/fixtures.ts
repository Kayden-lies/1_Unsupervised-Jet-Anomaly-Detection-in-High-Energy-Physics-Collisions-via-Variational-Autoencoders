// MOCK FIXTURES — layout development only. Replace with backend / result-file loaders (see README).
import {Dataset,ExperimentRun,ModelConfig} from '../types';
export const datasets:Dataset[]=[
{id:'lhco-rd',name:'LHC Olympics 2020 R&D',source:'LHC Olympics 2020 community challenge',events:null,features:null,labels:'unknown',preprocessing:'unknown',validation:'unknown'},
{id:'lhco-bb',name:'LHC Olympics Black Box',source:'LHC Olympics 2020 community challenge',events:null,features:null,labels:'unknown',preprocessing:'unknown',validation:'unknown'},
{id:'aspen',name:'Aspen Open Jets',source:'Aspen Open Jets public release',events:null,features:null,labels:'unknown',preprocessing:'unknown',validation:'unknown'}];
export const defaultConfig:ModelConfig={latentDim:8,beta:1,hidden:[64,32],batchSize:256,lr:0.001,epochs:50,scoring:'mse'};
const nm=(group:ExperimentRun['group'],n:number,name:string,config:string):ExperimentRun=>({id:`EXP-${group}-${String(n).padStart(3,'0')}`,group,name,status:'planned',config,metrics:null});
export const runs:ExperimentRun[]=[
nm('A',1,'Contamination 0%','signal fraction in training = 0'),nm('A',2,'Contamination 1%','signal fraction in training = 0.01'),nm('A',3,'Contamination 5%','signal fraction in training = 0.05'),
nm('B',1,'Mean error only','score = mean recon error'),nm('B',2,'Mean + variability','score = mean + std over latent samples'),
nm('C',1,'Train R&D, eval Black Box','eval distribution differs from train'),nm('C',2,'Train R&D, eval Aspen','eval distribution differs from train'),
nm('D',1,'Combined robustness','contamination x shift x scoring')];
export const groupNames:Record<string,string>={A:'Training contamination',B:'Uncertainty-aware scoring',C:'Distribution shift',D:'Combined robustness'};
const g=(x:number,m:number,s:number)=>Math.exp(-((x-m)**2)/(2*s*s));
export const histPreview=Array.from({length:40},(_,i)=>{const x=i/40;return{x:+x.toFixed(2),bg:Math.round(900*g(x,.25,.12)),sig:Math.round(300*g(x,.6,.15))}});
export const rocPreview=Array.from({length:41},(_,i)=>{const f=i/40;return{fpr:f,tpr:+Math.pow(f,.4).toFixed(3)}});
export const prPreview=Array.from({length:41},(_,i)=>{const r=i/40;return{recall:r,precision:+(1-.5*r*r).toFixed(3)}});
export const massPreview=(thr:number)=>Array.from({length:30},(_,i)=>{const m=50+i*20;const b=1000*g(m,300,120);return{m,before:Math.round(b),after:Math.round(b*(1-thr*g(m,250,150)))}});
export const scatterPreview=Array.from({length:150},(_,i)=>{const m=50+((i*37)%550);return{mass:m,score:+(.3+.2*Math.sin(i)+m/2500).toFixed(3)}});
