export declare class Context {
  /*
  * headers 可直接传入请求的headers
  * */
  constructor(host:string,path:string,method:string,headers:Map,serviceName:string='',regionId:string='')
  buildNonce():void
  setNonce(nonce:string):void
  check():void
  buildQuery (queryParams:object):void
}

export declare interface Credentials
{
  accessKeyId:string
  secretAccessKey:string
}

export declare class Signer {
   constructor(request:Context,credentials:Credentials,logger:any=console.log)

   sign(date:Date):string

   setSignableHeaders(signableHeaders:Array):void
}

