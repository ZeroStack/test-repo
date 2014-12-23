// Aim: access ftp files on companies listed: nasdaq, nyse, otc.
// Parse files and insert into MongoDB

var Client = Npm.require('ftp');

  var c = new Client();

  
  c.on('ready', function() {
  	console.log('read');

  	c.cwd('/SymbolDirectory', function(err, 'ftp.nasdaqtrader.com') {
  		c.list(function (err, list) {
  			if (err) {
  				throw err;
  			}
  			else {
  				list.forEach(function (element, index, array) {
  					console.log(element.name)
  				})
  			}
  		})
  	
  	});

  });


  c.connect({
  	host: 'ftp.nasdaqtrader.com'
  });

  

  
	
