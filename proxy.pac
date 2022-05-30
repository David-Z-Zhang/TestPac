function FindProxyForURL(url, host)
{
var my_computer_ip = myIpAddress();
if (
	  shExpMatch(host, "*.yahoo.com") ||
	  shExpMatch(host, "*.google.com*")
   )
   return "PROXY pac-proxy:8080; SOCKS pac-socks:8080; HTTPS 127.0.0.1:8080";
	  
else if
  (
	  shExpMatch(host, "*.baidu.com")
	)
	  return "HTTPS localhost:8080";

else if
  (
    isInNet(my_computer_ip, "10.28.128.0", "255.255.254.0") ||
    isInNet(my_computer_ip, "10.28.130.0", "255.255.255.0")
  )
	return "PROXY 10.28.131.214:8080";	
	
else return "DIRECT";
}
