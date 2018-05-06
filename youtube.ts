class Youtube{

    title : string;
    published : string;
    category : string;
    license : string;
    comments :string;
    commentsCount :number;
    subscribe: number;
    private view :number;
    private channelName: string;
    share:string;
    playList:any;

    constructor(title:string,published:string,category:string,license:string,comments:string,commentsCount:number,subscribe:number,view:number,channelName:string,share?:string,playList?:any){
        this.title=title;
        this.published=published;
        this.category=category;
        this.license=license;
        this.comments=comments;
        this.commentsCount=commentsCount;
        this.subscribe=subscribe;
        this.view=view;
        this.channelName=channelName;
        this.share=share;
        this.playList=playList;
    }

    getComments=()=>{
        return this.comments;
    }
    getCommentsCount=()=>{
        return this.commentsCount;
    }
    getChannelName=()=>{
        return this.channelName;
    }

    // acccess Private values
    getView=()=>{
        return this.view;
    }
    setView=(view:number)=>{
        this.view=view;
    }
   
}
class PlayListVideos extends Youtube{
    
    constructor(title: string, published: string, category: string, license: string, comments: string, commentsCount: number, subscribe: number, view: number, channelName: string, share?: string,playList?: any) {
        super(title,published,category,license,comments,commentsCount,subscribe,view,channelName,share,playList);
    }
    
    playListCount=()=>{
        return this.playList;
    }

}

    let youtubeObject=new Youtube("cricket","May-5-2018","sports","Standard YouTube License","Nice Video",1500,23,23000,"CricVideos")
    let playListCountObject=new PlayListVideos("cricket","May-5-2018","sports","Standard YouTube License","Nice Video",1500,2000000,23000,"CricVideos",'','2.5k')
    
    let comments=youtubeObject.getComments();
    console.log(comments);
    console.log(youtubeObject.getChannelName());

    let commentsCount=youtubeObject.getCommentsCount();
    console.log(commentsCount);

    //Access Inheritance properties
    playListCountObject.playListCount();
    console.log(playListCountObject.playListCount());

    //Access private value

    let view=youtubeObject.getView();
    console.log(view);

    //set the view value
    let modifyView=youtubeObject.setView(56000);
    console.log(youtubeObject.getView());


