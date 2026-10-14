import {ReactNode} from 'react';import {Info} from 'lucide-react';
export const Panel=({title,children,right}:{title:string;children:ReactNode;right?:ReactNode})=>(
<section className="rounded border border-line bg-panel p-4"><div className="mb-3 flex items-center justify-between gap-2"><h3 className="text-sm font-medium">{title}</h3>{right}</div>{children}</section>);
export const MockBadge=()=><span className="rounded border border-violet/40 px-1.5 py-0.5 text-[10px] text-violet">Mock preview data</span>;
export const Empty=({text}:{text:string})=><div className="rounded border border-dashed border-line p-5 text-center text-xs text-mute">{text}</div>;
export const Metric=({label,value,tip}:{label:string;value:string|number|null|undefined;tip?:string})=>(
<div className="rounded border border-line bg-panel p-3" title={tip}><div className="flex items-center gap-1 text-[11px] text-mute">{label}{tip&&<Info size={11}/>}</div>
<div className="mt-1 font-mono text-base">{value==null?<span className="text-mute/60">Unavailable</span>:value}</div></div>);
const tone:Record<string,string>={ready:'text-cyan border-cyan/40',completed:'text-cyan border-cyan/40',running:'text-violet border-violet/40',error:'text-red-400 border-red-400/40',failed:'text-red-400 border-red-400/40'};
export const Badge=({s}:{s:string})=><span className={`rounded border px-1.5 py-0.5 text-[11px] ${tone[s]??'text-mute border-line'}`}>{s}</span>;
export const Field=({label,children}:{label:string;children:ReactNode})=><label className="flex flex-col gap-1 text-xs text-mute">{label}{children}</label>;
export const Chart=({title,children}:{title:string;children:ReactNode})=><Panel title={title} right={<MockBadge/>}><div className="h-56">{children}</div></Panel>;
