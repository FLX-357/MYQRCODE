window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Die besten QR nur hier';
    
    document.addEventListener('visibilitychange', function(changename ) {
      var isPageActive = document.hidden;
    
      if(isPageActive){
        document.title = attentionMessage;
      }else {
        document.title = pageTitle;
      }
    });
    };