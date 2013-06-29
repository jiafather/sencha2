<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String jno = request.getParameter("jno");
%>
{"datas":
	<%if(jno == null || jno.equals("j1")){ %>
	[
		{"jno":"10", "jname":"우마왕"}
	]
	<%}else if(jno.equals("j2")){%>
	[
		{"jno":"10", "jname":"주성치"}
	]
	<%} %> 
}