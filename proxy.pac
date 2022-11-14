function FindProxyForURL(url, host)
{
var my_computer_ip = myIpAddress();
if (
	  shExpMatch(host, "*.yahoo.com") ||
	  shExpMatch(host, "*.google.com*") ||
	  shExpMatch(host, "10.204.204.17")
   )
   return "PROXY pac-proxy:8080; SOCKS pac-socks:8080; HTTPS 127.0.0.1:8080";
	  
else if
  (
	  shExpMatch(shExpMatch(host, "*.trendmicro.com")
	)
	  return "PROXY 10.28.6.43:8080";

else if
  (
    isInNet(my_computer_ip, "10.204.204.17", "255.255.254.0") ||
    isInNet(my_computer_ip, "10.28.130.0", "255.255.255.0")
  )
	return "PROXY 10.28.131.214:8080";	
	
else return "DIRECT";
}
