const query = [
	/*
	"(a:0)-[3]->(b:0),(b:0)-[0]->(c:5),(c:5)-[0]->(d:35),(c:5)-[0]->(e:35),(d:35)-[0]->(e:35)",
	"(a:0)-[0]->(b:0),(b:0)-[0]->(d:42),(b:0)-[1]->(c:0),(c:0)-[0]->(d:42),(d:42)-[0]->(e:6)",
	"(a:8)-[0]->(c:8),(a:8)-[0]->(b:8),(b:8)-[0]->(c:8),(b:8)-[0]->(d:0),(c:8)-[0]->(d:0),(d:0)-[0]->(e:3)",
	"(a:3)-[0]->(b:0),(b:0)-[0]->(e:34),(b:0)-[1]->(c:0),(c:0)-[0]->(e:34),(c:0)-[0]->(d:0),(d:0)-[0]->(e:34)",
	"(a:1)-[0]->(e:0),(a:1)-[0]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:0)-[3]->(b:0),(a:0)-[3]->(e:3),(b:0)-[3]->(c:3),(c:3)-[3]->(d:0),(d:0)-[3]->(e:3)",
	"(a:1)-[0]->(e:0),(a:1)-[0]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:4)-[3]->(e:0),(a:4)-[3]->(b:0),(b:0)-[3]->(c:3),(c:3)-[3]->(d:3),(d:3)-[3]->(e:0)",
	"(a:1)-[0]->(b:0),(a:1)-[0]->(e:0),(b:0)-[0]->(c:0),(c:0)-[0]->(d:3),(d:3)-[1]->(e:0)",
	"(a:0)-[0]->(b:14),(b:14)-[0]->(c:0),(b:14)-[0]->(e:0),(b:14)-[0]->(d:14),(c:0)-[2]->(e:0),(c:0)-[0]->(d:14),(d:14)-[0]->(e:0)",
	"(a:3)-[0]->(b:5),(a:3)-[0]->(e:0),(b:5)-[0]->(c:3),(c:3)-[0]->(d:0),(d:0)-[0]->(e:0)",
	"(a:25)-[0]->(e:3),(a:25)-[0]->(b:4),(b:4)-[1]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:3)",
	"(a:0)-[0]->(b:4),(a:0)-[0]->(e:15),(b:4)-[0]->(c:0),(c:0)-[1]->(d:0),(d:0)-[0]->(e:15)",
	"(a:0)-[0]->(b:3),(a:0)-[1]->(e:3),(b:3)-[1]->(c:0),(c:0)-[0]->(d:0),(d:0)-[0]->(e:3)",
	"(a:1)-[0]->(b:0),(a:1)-[0]->(e:42),(b:0)-[0]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:42)",
	
	 */
	/*
	"(a:0)-[2]->(b:0),(a:0)-[0]->(c:13),(b:0)-[0]->(c:13),(c:13)-[0]->(d:13),(d:13)-[0]->(e:13)",
	"(a:2)-[0]->(b:0),(b:0)-[0]->(e:20),(b:0)-[1]->(c:0),(c:0)-[0]->(e:20),(c:0)-[0]->(d:0),(d:0)-[0]->(e:20)",
	"(a:3)-[0]->(b:14),(a:3)-[0]->(d:0),(b:14)-[0]->(c:3),(c:3)-[1]->(d:0),(d:0)-[0]->(e:2)",
	"(a:0)-[0]->(b:13),(b:13)-[0]->(c:0),(b:13)-[0]->(e:0),(b:13)-[0]->(d:13),(c:0)-[2]->(e:0),(c:0)-[0]->(d:13),(d:13)-[0]->(e:0)",
	"(a:28)-[0]->(b:2),(a:28)-[0]->(e:3),(b:2)-[0]->(c:2),(c:2)-[0]->(d:0),(d:0)-[1]->(e:3)",
	"(a:1)-[0]->(e:23),(a:1)-[1]->(b:0),(b:0)-[0]->(c:2),(c:2)-[0]->(d:23),(d:23)-[0]->(e:23)",
	"(a:10)-[0]->(c:10),(a:10)-[0]->(b:10),(b:10)-[0]->(c:10),(b:10)-[0]->(d:0),(c:10)-[0]->(d:0),(d:0)-[0]->(e:2)",
	"(a:1)-[0]->(b:0),(a:1)-[0]->(e:10),(b:0)-[0]->(c:0),(c:0)-[0]->(d:2),(d:2)-[0]->(e:10)",
	"(a:10)-[0]->(b:10),(a:10)-[0]->(e:0),(a:10)-[0]->(d:10),(a:10)-[0]->(c:10),(b:10)-[0]->(c:10),(c:10)-[0]->(d:10),(d:10)-[0]->(e:0)",
	"(a:0)-[0]->(b:1),(a:0)-[0]->(e:0),(b:1)-[0]->(c:12),(c:12)-[0]->(d:2),(d:2)-[0]->(e:0)",
	
	 */
	"(a:3)-[0]->(b:14),(a:3)-[0]->(d:0),(b:14)-[0]->(c:3),(c:3)-[1]->(d:0),(d:0)-[0]->(e:2)",
	"(a:10)-[0]->(c:10),(a:10)-[0]->(b:10),(b:10)-[0]->(c:10),(b:10)-[0]->(d:0),(c:10)-[0]->(d:0),(d:0)-[0]->(e:2)",
	"(a:0)-[3]->(b:0),(b:0)-[0]->(c:6),(c:6)-[0]->(d:23),(c:6)-[0]->(e:23),(d:23)-[0]->(e:23)",
	"(a:0)-[0]->(b:0),(b:0)-[0]->(d:30),(b:0)-[1]->(c:0),(c:0)-[0]->(d:30),(d:30)-[0]->(e:4)",
	"(a:0)-[0]->(e:0),(a:0)-[0]->(b:13),(b:13)-[0]->(c:13),(c:13)-[0]->(d:0),(c:13)-[0]->(e:0),(d:0)-[2]->(e:0)",
	"(a:2)-[0]->(b:0),(b:0)-[0]->(e:20),(b:0)-[1]->(c:0),(c:0)-[0]->(e:20),(c:0)-[0]->(d:0),(d:0)-[0]->(e:20)",
	"(a:1)-[0]->(e:0),(a:1)-[0]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:0)-[3]->(b:0),(a:0)-[3]->(e:2),(b:0)-[3]->(c:2),(c:2)-[3]->(d:0),(d:0)-[3]->(e:2)",
	"(a:1)-[1]->(b:0),(b:0)-[0]->(e:0),(b:0)-[0]->(c:15),(c:15)-[0]->(d:0),(c:15)-[0]->(e:0),(d:0)-[1]->(e:0)",
	"(a:0)-[0]->(c:21),(a:0)-[0]->(b:0),(b:0)-[0]->(c:21),(c:21)-[0]->(d:6),(d:6)-[0]->(e:17)",
	
	"(a:3)-[0]->(b:14),(a:3)-[0]->(d:0),(b:14)-[0]->(c:3),(c:3)-[1]->(d:0),(d:0)-[0]->(e:2)",
	"(a:10)-[0]->(c:10),(a:10)-[0]->(b:10),(b:10)-[0]->(c:10),(b:10)-[0]->(d:0),(c:10)-[0]->(d:0),(d:0)-[0]->(e:2)",
	"(a:0)-[3]->(b:0),(b:0)-[0]->(c:6),(c:6)-[0]->(d:23),(c:6)-[0]->(e:23),(d:23)-[0]->(e:23)",
	"(a:0)-[0]->(b:0),(b:0)-[0]->(d:30),(b:0)-[1]->(c:0),(c:0)-[0]->(d:30),(d:30)-[0]->(e:4)",
	"(a:0)-[0]->(e:0),(a:0)-[0]->(b:13),(b:13)-[0]->(c:13),(c:13)-[0]->(d:0),(c:13)-[0]->(e:0),(d:0)-[2]->(e:0)",
	"(a:2)-[0]->(b:0),(b:0)-[0]->(e:20),(b:0)-[1]->(c:0),(c:0)-[0]->(e:20),(c:0)-[0]->(d:0),(d:0)-[0]->(e:20)",
	"(a:1)-[0]->(e:0),(a:1)-[0]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:0)-[3]->(b:0),(a:0)-[3]->(e:2),(b:0)-[3]->(c:2),(c:2)-[3]->(d:0),(d:0)-[3]->(e:2)",
	"(a:1)-[0]->(e:0),(a:1)-[0]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:0)-[0]->(c:21),(a:0)-[0]->(b:0),(b:0)-[0]->(c:21),(c:21)-[0]->(d:6),(d:6)-[0]->(e:17)",
	"(a:3)-[0]->(b:15),(b:15)-[0]->(c:4),(b:15)-[0]->(e:4),(c:4)-[0]->(d:15),(d:15)-[0]->(e:4)",
	"(a:2)-[0]->(e:20),(a:2)-[3]->(b:0),(b:0)-[3]->(c:0),(c:0)-[3]->(d:2),(d:2)-[0]->(e:20)",
	"(a:3)-[0]->(b:14),(b:14)-[0]->(e:1),(b:14)-[0]->(c:1),(c:1)-[0]->(d:14),(d:14)-[0]->(e:1)",
	"(a:3)-[0]->(b:14),(b:14)-[0]->(e:3),(b:14)-[0]->(c:3),(c:3)-[1]->(d:0),(d:0)-[0]->(e:3)",
	"(a:1)-[0]->(d:10),(a:1)-[0]->(b:50),(b:50)-[0]->(c:1),(c:1)-[0]->(d:10),(d:10)-[0]->(e:0)",
	"(a:8)-[0]->(b:8),(a:8)-[0]->(e:0),(a:8)-[0]->(d:8),(a:8)-[0]->(c:8),(b:8)-[0]->(c:8),(c:8)-[0]->(d:8),(d:8)-[0]->(e:0)",
	"(a:3)-[0]->(e:34),(a:3)-[3]->(b:0),(b:0)-[3]->(c:0),(c:0)-[3]->(d:3),(d:3)-[0]->(e:34)",
	"(a:1)-[0]->(b:0),(a:1)-[0]->(e:8),(b:0)-[0]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:8)",
	"(a:8)-[0]->(c:8),(a:8)-[0]->(b:8),(b:8)-[0]->(c:8),(b:8)-[0]->(d:0),(c:8)-[0]->(d:0),(d:0)-[0]->(e:3)",
	"(a:4)-[0]->(b:2),(a:4)-[0]->(d:0),(b:2)-[0]->(c:4),(c:4)-[1]->(d:0),(d:0)-[0]->(e:3)",
	"(a:3)-[0]->(b:0),(b:0)-[0]->(e:34),(b:0)-[1]->(c:0),(c:0)-[0]->(e:34),(c:0)-[0]->(d:0),(d:0)-[0]->(e:34)",
	"(a:7)-[0]->(b:3),(a:7)-[0]->(e:4),(b:3)-[0]->(c:3),(c:3)-[0]->(d:0),(d:0)-[1]->(e:4)",
	"(a:1)-[0]->(e:35),(a:1)-[1]->(b:0),(b:0)-[0]->(c:3),(c:3)-[0]->(d:35),(d:35)-[0]->(e:35)",
	"(a:3)-[0]->(b:36),(a:3)-[0]->(e:0),(b:36)-[0]->(c:3),(c:3)-[0]->(d:0),(d:0)-[0]->(e:0)",
	"(a:0)-[1]->(b:0),(a:0)-[0]->(c:25),(b:0)-[0]->(c:25),(c:25)-[0]->(d:0),(d:0)-[2]->(e:1)",
	"(a:0)-[0]->(b:16),(b:16)-[0]->(c:0),(c:0)-[0]->(e:10),(c:0)-[0]->(d:10),(d:10)-[0]->(e:10)",
	"(a:4)-[0]->(b:14),(a:4)-[1]->(e:0),(b:14)-[0]->(c:3),(c:3)-[0]->(d:3),(d:3)-[0]->(e:0)",
	"(a:15)-[0]->(e:33),(a:15)-[0]->(b:0),(b:0)-[0]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:33)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:10),(c:10)-[0]->(d:0),(c:10)-[0]->(e:0),(d:0)-[2]->(e:0)",
	"(a:3)-[0]->(b:5),(b:5)-[0]->(c:25),(b:5)-[0]->(e:0),(c:25)-[0]->(d:5),(d:5)-[0]->(e:0)",
	"(a:26)-[0]->(e:3),(a:26)-[0]->(b:3),(b:3)-[0]->(c:0),(c:0)-[0]->(d:0),(d:0)-[0]->(e:3)",
	"(a:3)-[0]->(e:25),(a:3)-[0]->(b:3),(b:3)-[0]->(c:0),(c:0)-[3]->(d:3),(d:3)-[0]->(e:25)",
	"(a:0)-[0]->(b:1),(a:0)-[0]->(e:5),(b:1)-[0]->(c:33),(c:33)-[0]->(d:1),(d:1)-[0]->(e:5)",
	"(a:0)-[0]->(b:10),(b:10)-[0]->(c:0),(b:10)-[0]->(e:0),(b:10)-[0]->(d:10),(c:0)-[2]->(e:0),(c:0)-[0]->(d:10),(d:10)-[0]->(e:0)",
	"(a:0)-[2]->(b:0),(a:0)-[0]->(c:10),(b:0)-[0]->(c:10),(c:10)-[0]->(d:10),(d:10)-[0]->(e:10)",
	"(a:1)-[0]->(b:2),(b:2)-[0]->(e:1),(b:2)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[1]->(e:1)",
	"(a:4)-[0]->(b:25),(b:25)-[0]->(c:4),(b:25)-[0]->(e:4),(c:4)-[0]->(d:25),(d:25)-[0]->(e:4)",
	"(a:49)-[0]->(e:5),(a:49)-[0]->(b:5),(b:5)-[0]->(c:0),(c:0)-[0]->(d:0),(d:0)-[0]->(e:5)",
	"(a:26)-[0]->(e:5),(a:26)-[0]->(b:5),(b:5)-[0]->(c:0),(c:0)-[0]->(d:0),(d:0)-[0]->(e:5)",
	"(a:10)-[0]->(e:3),(a:10)-[0]->(b:1),(b:1)-[1]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:3)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:10),(c:10)-[0]->(d:0),(c:10)-[0]->(e:10),(d:0)-[0]->(e:10)",
	"(a:5)-[0]->(b:11),(b:11)-[0]->(c:0),(b:11)-[0]->(d:0),(b:11)-[0]->(e:0),(c:0)-[3]->(d:0),(d:0)-[3]->(e:0)",
	"(a:0)-[0]->(b:0),(a:0)-[1]->(e:3),(b:0)-[0]->(c:3),(c:3)-[3]->(d:0),(d:0)-[0]->(e:3)",
	"(a:0)-[0]->(b:1),(a:0)-[0]->(e:0),(b:1)-[0]->(c:19),(c:19)-[0]->(d:3),(d:3)-[0]->(e:0)",
	"(a:4)-[0]->(b:25),(b:25)-[0]->(c:6),(b:25)-[0]->(e:6),(c:6)-[0]->(d:25),(d:25)-[0]->(e:6)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:48),(c:48)-[0]->(e:0),(c:48)-[0]->(d:0),(d:0)-[0]->(e:0)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:25),(c:25)-[0]->(d:25),(c:25)-[0]->(e:5),(d:25)-[0]->(e:5)",
	"(a:21)-[0]->(b:0),(b:0)-[0]->(c:10),(c:10)-[0]->(d:0),(c:10)-[0]->(e:0),(d:0)-[0]->(e:0)",
	"(a:3)-[0]->(b:0),(a:3)-[1]->(e:15),(b:0)-[3]->(c:0),(c:0)-[0]->(d:3),(d:3)-[1]->(e:15)",
	"(a:1)-[1]->(e:0),(a:1)-[0]->(b:14),(b:14)-[0]->(c:3),(c:3)-[0]->(d:3),(d:3)-[0]->(e:0)",
	"(a:4)-[0]->(b:25),(b:25)-[0]->(e:3),(b:25)-[0]->(c:4),(c:4)-[1]->(d:0),(d:0)-[3]->(e:3)",
	"(a:0)-[0]->(e:0),(a:0)-[0]->(b:10),(b:10)-[0]->(c:10),(c:10)-[0]->(d:0),(c:10)-[0]->(e:0),(d:0)-[2]->(e:0)",
	"(a:0)-[0]->(b:0),(b:0)-[0]->(d:0),(b:0)-[0]->(e:8),(b:0)-[0]->(c:8),(c:8)-[0]->(d:0),(d:0)-[0]->(e:8)",
	"(a:0)-[0]->(b:16),(b:16)-[0]->(c:0),(c:0)-[2]->(d:0),(c:0)-[0]->(e:10),(d:0)-[0]->(e:10)",
	"(a:3)-[0]->(b:48),(b:48)-[0]->(c:0),(b:48)-[0]->(e:0),(b:48)-[0]->(d:0),(c:0)-[1]->(d:0),(d:0)-[0]->(e:0)",
	"(a:0)-[0]->(b:3),(a:0)-[0]->(e:0),(b:3)-[0]->(c:19),(c:19)-[0]->(d:3),(d:3)-[0]->(e:0)",
	"(a:0)-[3]->(b:0),(b:0)-[0]->(c:5),(c:5)-[0]->(d:35),(c:5)-[0]->(e:35),(d:35)-[0]->(e:35)",
	"(a:0)-[3]->(b:3),(b:3)-[3]->(e:0),(b:3)-[0]->(c:25),(c:25)-[0]->(d:4),(d:4)-[1]->(e:0)",
	"(a:21)-[0]->(b:5),(b:5)-[0]->(c:25),(c:25)-[0]->(e:0),(c:25)-[0]->(d:0),(d:0)-[0]->(e:0)",
	"(a:2)-[0]->(b:1),(a:2)-[0]->(e:3),(b:1)-[1]->(c:0),(c:0)-[0]->(d:3),(d:3)-[0]->(e:3)",
	"(a:0)-[0]->(b:0),(b:0)-[0]->(d:42),(b:0)-[1]->(c:0),(c:0)-[0]->(d:42),(d:42)-[0]->(e:6)",
	"(a:0)-[0]->(b:1),(a:0)-[3]->(e:0),(b:1)-[0]->(c:4),(c:4)-[0]->(d:0),(d:0)-[3]->(e:0)",
	"(a:4)-[0]->(b:7),(a:4)-[0]->(d:0),(b:7)-[0]->(c:4),(c:4)-[1]->(d:0),(d:0)-[0]->(e:3)",
	"(a:0)-[0]->(b:1),(a:0)-[0]->(e:0),(b:1)-[0]->(c:43),(c:43)-[0]->(d:1),(d:1)-[0]->(e:0)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:46),(c:46)-[0]->(e:0),(c:46)-[0]->(d:0),(d:0)-[1]->(e:0)",
	"(a:0)-[0]->(b:5),(b:5)-[0]->(c:33),(c:33)-[0]->(e:5),(c:33)-[0]->(d:3),(d:3)-[0]->(e:5)",
	"(a:4)-[1]->(b:5),(a:4)-[0]->(d:48),(b:5)-[0]->(c:4),(c:4)-[0]->(d:48),(d:48)-[0]->(e:3)",
	"(a:4)-[0]->(b:2),(b:2)-[0]->(e:4),(b:2)-[0]->(c:4),(c:4)-[1]->(d:0),(d:0)-[0]->(e:4)",
	"(a:1)-[2]->(b:0),(b:0)-[0]->(c:11),(c:11)-[0]->(d:0),(c:11)-[0]->(e:0),(d:0)-[3]->(e:0)",
	"(a:3)-[0]->(b:3),(a:3)-[0]->(d:36),(b:3)-[1]->(c:3),(c:3)-[0]->(d:36),(d:36)-[0]->(e:0)",
	"(a:4)-[0]->(d:10),(a:4)-[0]->(b:0),(b:0)-[1]->(c:4),(c:4)-[0]->(d:10),(d:10)-[0]->(e:4)",
	"(a:0)-[0]->(b:0),(a:0)-[0]->(c:34),(b:0)-[0]->(c:34),(c:34)-[0]->(d:5),(d:5)-[0]->(e:0)",
	"(a:6)-[0]->(b:35),(b:35)-[0]->(e:6),(b:35)-[0]->(d:35),(b:35)-[0]->(c:5),(c:5)-[0]->(d:35),(d:35)-[0]->(e:6)",
	"(a:1)-[0]->(b:45),(b:45)-[0]->(c:1),(b:45)-[0]->(e:1),(c:1)-[0]->(d:0),(d:0)-[1]->(e:1)",
	"(a:1)-[1]->(b:0),(b:0)-[0]->(d:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:0),(d:0)-[0]->(e:9)",
	"(a:5)-[0]->(b:25),(a:5)-[0]->(c:25),(a:5)-[0]->(e:0),(b:25)-[0]->(c:25),(b:25)-[0]->(d:5),(c:25)-[0]->(d:5),(d:5)-[0]->(e:0)",
	"(a:5)-[0]->(b:35),(b:35)-[0]->(e:6),(b:35)-[0]->(d:35),(b:35)-[0]->(c:5),(c:5)-[0]->(d:35),(d:35)-[0]->(e:6)",
	"(a:6)-[0]->(d:25),(a:6)-[0]->(b:25),(b:25)-[0]->(c:6),(c:6)-[0]->(d:25),(d:25)-[0]->(e:3)",
	"(a:4)-[0]->(b:48),(b:48)-[0]->(e:4),(b:48)-[0]->(c:4),(c:4)-[0]->(d:5),(d:5)-[1]->(e:4)",
	"(a:5)-[0]->(b:25),(a:5)-[0]->(d:0),(b:25)-[0]->(c:5),(c:5)-[0]->(d:0),(d:0)-[1]->(e:1)",
	"(a:1)-[0]->(e:48),(a:1)-[1]->(b:0),(b:0)-[0]->(c:1),(c:1)-[0]->(d:48),(d:48)-[0]->(e:48)",
	"(a:4)-[0]->(b:2),(b:2)-[0]->(e:1),(b:2)-[0]->(c:1),(c:1)-[0]->(d:2),(d:2)-[0]->(e:1)",
	"(a:1)-[0]->(b:8),(a:1)-[0]->(d:13),(b:8)-[0]->(c:1),(c:1)-[0]->(d:13),(d:13)-[0]->(e:4)",
	"(a:3)-[0]->(b:13),(b:13)-[0]->(c:1),(b:13)-[0]->(e:1),(c:1)-[0]->(d:8),(d:8)-[0]->(e:1)",
	"(a:0)-[1]->(b:0),(a:0)-[0]->(c:48),(b:0)-[0]->(c:48),(c:48)-[0]->(d:0),(d:0)-[0]->(e:21)",
	"(a:3)-[0]->(b:26),(b:26)-[0]->(c:3),(b:26)-[0]->(e:4),(c:3)-[0]->(d:0),(d:0)-[1]->(e:4)",
	"(a:3)-[0]->(b:5),(b:5)-[0]->(d:25),(b:5)-[0]->(c:25),(c:25)-[0]->(d:25),(d:25)-[0]->(e:0)",
	"(a:3)-[0]->(b:2),(b:2)-[0]->(e:1),(b:2)-[0]->(c:1),(c:1)-[0]->(d:2),(d:2)-[0]->(e:1)",
	"(a:4)-[0]->(b:33),(b:33)-[0]->(d:5),(b:33)-[0]->(c:3),(c:3)-[0]->(d:5),(d:5)-[0]->(e:3)",
	"(a:0)-[1]->(b:0),(a:0)-[0]->(e:5),(b:0)-[0]->(c:5),(c:5)-[0]->(d:48),(d:48)-[0]->(e:5)",
	"(a:37)-[0]->(b:3),(a:37)-[0]->(e:4),(b:3)-[0]->(c:3),(c:3)-[0]->(d:0),(d:0)-[1]->(e:4)",
	"(a:14)-[0]->(d:1),(a:14)-[0]->(b:1),(b:1)-[0]->(c:14),(c:14)-[0]->(d:1),(d:1)-[0]->(e:0)",
	"(a:4)-[0]->(b:7),(b:7)-[0]->(c:4),(b:7)-[0]->(e:4),(c:4)-[0]->(d:0),(d:0)-[1]->(e:4)",
	"(a:4)-[0]->(b:48),(a:4)-[0]->(d:48),(b:48)-[0]->(c:4),(c:4)-[0]->(d:48),(d:48)-[0]->(e:4)",
	"(a:1)-[0]->(d:8),(a:1)-[0]->(b:13),(b:13)-[0]->(c:1),(c:1)-[0]->(d:8),(d:8)-[0]->(e:0)",
	"(a:0)-[0]->(b:0),(a:0)-[0]->(e:12),(b:0)-[0]->(c:5),(c:5)-[0]->(d:36),(d:36)-[0]->(e:12)",
	"(a:1)-[1]->(b:0),(b:0)-[0]->(e:0),(b:0)-[0]->(c:25),(c:25)-[0]->(d:0),(c:25)-[0]->(e:0),(d:0)-[1]->(e:0)",
	"(a:3)-[0]->(b:14),(b:14)-[0]->(c:1),(b:14)-[0]->(e:1),(c:1)-[0]->(d:14),(d:14)-[0]->(e:1)",
	"(a:3)-[0]->(d:26),(a:3)-[0]->(b:0),(b:0)-[1]->(c:4),(c:4)-[0]->(d:26),(d:26)-[0]->(e:4)",
	"(a:4)-[0]->(b:13),(a:4)-[1]->(e:0),(b:13)-[0]->(c:3),(c:3)-[0]->(d:3),(d:3)-[0]->(e:0)",
	"(a:0)-[0]->(b:25),(b:25)-[0]->(d:25),(b:25)-[0]->(c:5),(c:5)-[0]->(d:25),(d:25)-[0]->(e:0)",
	"(a:2)-[0]->(d:1),(a:2)-[0]->(b:1),(b:1)-[0]->(c:2),(c:2)-[0]->(d:1),(d:1)-[0]->(e:0)",
	"(a:6)-[0]->(d:35),(a:6)-[0]->(b:35),(b:35)-[0]->(c:6),(b:35)-[0]->(d:35),(c:6)-[0]->(d:35),(d:35)-[0]->(e:6)",
	"(a:5)-[0]->(b:25),(a:5)-[0]->(c:25),(b:25)-[0]->(c:25),(b:25)-[0]->(d:5),(c:25)-[0]->(d:5),(d:5)-[0]->(e:3)",
	"(a:0)-[0]->(c:48),(a:0)-[0]->(b:0),(b:0)-[0]->(c:48),(c:48)-[0]->(d:5),(d:5)-[0]->(e:33)",

];
export default query;