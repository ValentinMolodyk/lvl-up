var CommentsBox = React.createClass({
  render: function(){
   return (
       <div className='ComBox'>
           I Commbox -
          <Comment/>
         <Message/>
       </div>
   )
  }
});


var Comment = React.createClass({
  render: function(){
    return (
        <div className='ComBox__mess'>
          I ComMessage
        </div>
    )
  }
});


var Message = React.createClass({
  render: function(){
    return (
        <div className='ComBox__quote'>
          I quoteMessage
            <SubComm/>
        </div>
    )
  }
});



var SubComm = React.createClass({
  render: function(){
    return (
        <div className='ComBox__submess'>
          I SubComm
        </div>
    )
  }
});
