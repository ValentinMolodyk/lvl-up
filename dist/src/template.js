var CommentsBox = React.createClass({displayName: "CommentsBox",
  render: function(){
   return (
       React.createElement("div", {className: "ComBox"}, 
           "I Commbox -", 
          React.createElement(Comment, null), 
         React.createElement(Message, null)
       )
   )
  }
});


var Comment = React.createClass({displayName: "Comment",
  render: function(){
    return (
        React.createElement("div", {className: "ComBox__mess"}, 
          "I ComMessage"
        )
    )
  }
});


var Message = React.createClass({displayName: "Message",
  render: function(){
    return (
        React.createElement("div", {className: "ComBox__quote"}, 
          "I quoteMessage", 
            React.createElement(SubComm, null)
        )
    )
  }
});



var SubComm = React.createClass({displayName: "SubComm",
  render: function(){
    return (
        React.createElement("div", {className: "ComBox__submess"}, 
          "I SubComm"
        )
    )
  }
});
