<template>

  <v-app>
    <v-container fluid>
      <v-card height="430" >
        <v-row>
          <v-col cols="2">
              <v-card height="400" v-show="datasetValue==='aids'" class="overflow-y-auto">
                      <div class="title text-h5" style="text-align: center; ">example patterns</div>
                      <v-container fluid v-for="i in 10" :key="i">
                          <div :id="'Dis0'+(i-1)+'Div'" class="gojspanel_basic example_patterns_gojspanel"></div>
                          <div class="text-center">
                              <v-btn text @click="loadMap(null,null,aids_query[i-1])">
                                  <v-icon>mdi-arrow-right</v-icon>
                              </v-btn>
                          </div>
                      </v-container>
<!--                      <div id="Dis00Div" class="gojspanel_basic example_patterns_gojspane l"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[0])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis01Div" class="gojspanel" style="border: 2px solid black; width:180px; height:190px;margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[1])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis02Div" style=""></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[2])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis03Div" style="width:180px; height:190px;background-color: #56cef3;margin: 0 auto "></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[3])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis04Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[4])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis05Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[5])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis06Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[6])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis07Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[7])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis08Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[8])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis09Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,aids_query[9])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->


                  </v-card>
              <v-card height="400" v-show="datasetValue!=='aids'" class="overflow-y-auto">
                      <div class="title text-h5" style="text-align: center; ">example patterns</div>
                      <v-container fluid v-for="i in 10" :key="i">
                          <div :id="'Dis0'+(i+14)+'Div'" class="gojspanel_basic example_patterns_gojspanel"></div>
                          <div class="text-center">
                              <v-btn text @click="loadMap(null,null,wordnet_query[i-1])">
                                  <v-icon>mdi-arrow-right</v-icon>
                              </v-btn>
                          </div>
                      </v-container>
<!--                      <div id="Dis015Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[0])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis016Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[1])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis017Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[2])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis018Div" style="width:180px; height:190px;background-color: #56cef3;margin: 0 auto "></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[3])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis019Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[4])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

<!--                      <div id="Dis020Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[5])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis021Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[6])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis022Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[7])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis023Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[8])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->
<!--                      <div id="Dis024Div" style="border: 2px solid black; width:180px; height:190px;background-color: #56cef3; margin: 0 auto"></div>-->
<!--                      <div class="text-center"><v-btn text @click="loadMap(null,null,wordnet_query[9])"><v-icon>mdi-arrow-right</v-icon> </v-btn></div>-->
<!--                      <v-spacer style="height: 20px"></v-spacer>-->

                  </v-card>
          </v-col>
          <v-col cols="3" >
              <v-card class="pa-0 ma-0 overflow-y-auto overflow-x-hidden" height="400">
                  <div class="title text-h5" style="text-align: center; ">query graph</div>
                  <div id="myDiagramDiv" class="gojspanel_basic query_graph_gojspanel"></div>
                  <v-card-actions style="justify-content: center">
                      <v-btn @click="makeNode()" width="40" >add</v-btn>
                      <v-btn @click="delNode" width="40">delete</v-btn>
                      <v-btn @click="clearMap(null)" width="40">clear</v-btn>
                          <!--                      <v-col > <v-btn @click="openInput('fileInput')"  width="40">load</v-btn></v-col>-->
                      <v-btn @click="makeQuery(queryCode,null)" width="40">query</v-btn>
                  </v-card-actions>
                  <v-file-input hide-input id="fileInput"
                                @change ="loadMap(makingFile, null)"
                                v-model="makingFile" v-show="false">
                  </v-file-input>
              </v-card>
          </v-col>
          <v-col>
              <v-card class="overflow-y-auto" height="400">
                  <div class="title text-h5" style="text-align: center;">query information</div>
                  <v-data-table
                          v-if="myDiagram && displayFlag"
                          :headers="graphHeader"
                          :items="myDiagram.model.linkDataArray"
                          hide-default-header
                          hide-default-footer>
                      <template v-slot:header="{ props: { headers } }">
                          <thead>
                          <tr>
                                  <th v-for="item in graphHeader" class="pa-0 font-weight-regular" style="
                                  font-size:16px; color: black; text-align: center"
                                       :key="item.text" >
                                      <span >{{item.text}}</span>
                                  </th>
                          </tr>
                          </thead>
                      </template>
                      <template v-slot:item="{item}">
                          <tr style="height: 64px">
                              <td>{{item.from}}</td>

                              <td >{{item.vLabel1?item.vLabel1:findLabelFromKey(item.from)}}</td>
                              <td >{{item.to}}</td>
                              <td >{{item.vLabel2?item.vLabel2:findLabelFromKey(item.to)}}</td>
                              <td >{{item.eLabel?item.eLabel:-1}}</td>
                              <td>
                                  <v-row dense>
                                      <v-col><v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon></v-col>
                                      <v-col><v-icon @click="myDiagram.model.removeLinkData(item)">mdi-delete</v-icon></v-col>
                                  </v-row>
                              </td>

                          </tr>
                      </template>
                      <!--
                      <template v-slot:item.from="{ item }">

                      </template>
                      <template v-slot:item.to="{ item }">
                          <span >{{item.to}}</span>
                      </template>
                      <template v-slot:item.vLabel1="{ item }">
                          <span >{{item.vLabel1?item.vLabel1:findLabelFromKey(item.from)}}</span>
                       </template>
                      <template v-slot:item.vLabel2="{ item }">
                          <span >{{item.vLabel2?item.vLabel2:findLabelFromKey(item.to)}}</span>
                      </template>
                      <template v-slot:item.eLabel="{ item }">
                          <span >{{item.eLabel?item.eLabel:-1}}</span>
                      </template>
                      <template v-slot:item.actions="{ item }">
                          <v-row dense>
                              <v-col><v-icon class="mr-2" @click="editItem(item)">mdi-pencil</v-icon></v-col>
                              <v-col><v-icon @click="myDiagram.model.removeLinkData(item)">mdi-delete</v-icon></v-col>


                          </v-row>

                      </template>
                      -->
                      <template v-slot:top>
                          <v-dialog v-model="panelDialog" max-width="500px">
                              <v-card>
                                  <v-card-title>
                                      <span class="headline">edit</span>
                                  </v-card-title>
                                  <v-card-text>
                                      <v-container>
                                          <v-row>
                                              <v-col cols="12" sm="6" md="4">
                                                  <v-text-field v-model="editedItem.from" label="v1"></v-text-field>
                                              </v-col>
                                              <v-col cols="12" sm="6" md="4">
                                                  <v-text-field v-model="editedItem.vLabel1" label="vLabel1"></v-text-field>
                                              </v-col>
                                              <v-col cols="12" sm="6" md="4">
                                                  <v-text-field v-model="editedItem.to" label="v2"></v-text-field>
                                              </v-col>
                                              <v-col cols="12" sm="6" md="4">
                                                  <v-text-field v-model="editedItem.vLabel2" label="vLabel2"></v-text-field>
                                              </v-col>
                                              <v-col cols="12" sm="6" md="4">
                                                  <v-text-field v-model="editedItem.eLabel" label="eLabel"></v-text-field>
                                              </v-col>
                                          </v-row>
                                      </v-container>
                                  </v-card-text>

                                  <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
                                      <v-btn color="blue darken-1" text @click="saveDialog">Save</v-btn>
                                  </v-card-actions>
                              </v-card>
                          </v-dialog>

                      </template>
                  </v-data-table>
              </v-card>
          </v-col>
          <v-col cols="3" style="">
            <v-card  class="overflow-y-auto pa-2" height="400">
              <v-card-title class="pa-0" >
                            <v-spacer></v-spacer>
                          <span class="title" >dataset:</span>
                          <v-radio-group v-model="datasetValue" row>
                          <v-radio label="aids" value="aids"></v-radio>
                          <v-radio label="wordnet" value="wordnet"></v-radio>
                      </v-radio-group>
                  <v-spacer></v-spacer>

              </v-card-title>
              <div v-show="datasetValue==='wordnet'">
                <div >Wordnet is a lexical network with 76,853 vertices and 120,399 edges. All edge labels are 0. The vertex label distribution is as follows:</div>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col><v-img src="../assets/wordnet_label(2).ac408ebe.jpg" width="350" /></v-col>
                    <v-spacer></v-spacer>
                </v-row>

              </div>

              <div v-show="datasetValue==='aids'">
                <div >Aids is a biological network with 253,598 vertices and 273,955 edges. The vertex label distribution and edge label distribution are as follows:</div>
                  <v-row>
                      <v-spacer></v-spacer>
                      <v-col><v-img src="../assets/aids_vertex_label(2).4c2d629e.jpg" max-width="350"/></v-col>
                      <v-spacer></v-spacer>
                  </v-row>
                  <v-row>
                      <v-spacer></v-spacer>
                      <v-col><v-img src="../assets/aids_edge_label(2).7dde502f.jpg" max-width="350"/></v-col>
                      <v-spacer></v-spacer>
                  </v-row>

              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
        <v-spacer style="height: 8px"></v-spacer>
      <v-card>
        <v-row>
          <v-col cols="5.5">
            <v-card height="700">
            <div class="title" style="text-align: center">selected GHD plan </div>
            <v-row>
              <v-col> <div class="text-h6 title" style="text-align: center">AGM plans</div> </v-col>
              <v-col> <div class="text-h6 title" style="text-align: center">LSS plans</div> </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div id="AGMDiv" class="gojspanel_basic agm_gojspanel"></div>
              </v-col>
              <v-col>
                <div id="LSSDiv" class="gojspanel_basic lss_gojspanel"></div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="pa-0 font-weight-bold text-h5" style="text-align: center">query result</div>
              <v-simple-table >
                  <thead >
                  <tr>
                    <th></th>
                    <th class="text-h5">AGM</th>
                    <th class="text-h5">LSS</th>
                  </tr>
                  </thead>
                  <tbody v-if="queryInfo.length>0" >
                  <tr>
                    <td class="text-h6">plan time(ms)</td>
                    <td class="text-h6">{{queryInfo[0].planGenTime}}</td>
                    <td class="text-h6"> {{queryInfo[1].planGenTime}}</td>
                  </tr>
                  <tr>
                    <td class="text-h6">execution time(ms)</td>
                    <td class="text-h6">{{queryInfo[0].joinTime}}</td>
                    <td class="text-h6">{{queryInfo[1].joinTime}}</td>
                  </tr>
                  <tr>
                    <td class="text-h6">overall time(ms)</td>
                    <td class="text-h6">{{queryInfo[0].overallTime}}</td>
                    <td class="text-h6">{{queryInfo[1].overallTime}}</td>
                  </tr>
                  <tr>
                    <td class="text-h6">coefficient of variation</td>
                    <td class="text-h6">{{queryInfo[0].planDistinctness.toFixed(4)}}</td>
                    <td class="text-h6">{{queryInfo[1].planDistinctness.toFixed(4)}}</td>
                  </tr>
                  <tr>
                    <td class="text-h6">result size</td>
                    <td class="text-h6">{{queryResultSize}}</td>
                    <td class="text-h6">{{queryResultSize}}</td>
                  </tr>
                  </tbody>
                </v-simple-table>
              </v-col>


            </v-row>

            </v-card>
          </v-col>
          <v-col cols="6.5">
            <v-card height="700" class="overflow-y-auto">
            <div class="text-h5" style="text-align: center">candidate GHD plans </div>

            <v-row>
              <v-col> <div class="text-h6" style="text-align: center">AGM plans</div> </v-col>
              <v-col> <div class="text-h6" style="text-align: center">LSS plans</div> </v-col>
            </v-row>


            <v-radio-group v-model="selectedPtr">
                <v-container>
                    <v-row  align="center" v-for="i in 5" :key="'resultrow'+i">
                        <v-radio :value="i-1" ></v-radio>
                        <v-col>
                            <div :id="'AGMPlans0'+(i-1)+'Div'"
                                 :class="{'gojspanel_basic':selectedPtr===i-1}"
                                 class="plans_gojspanel"></div>
                        </v-col>
                        <v-col>
                            <div :id="'LSSPlans0'+(i-1)+'Div'" :class="{ 'gojspanel_basic' :selectedPtr===i-1}"
                                 class="plans_gojspanel" ></div>
                        </v-col>
                    </v-row>
                </v-container>

<!--            <v-row align="center">-->
<!--              <v-col cols="1">-->
<!--                <v-radio :value="1"></v-radio>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="AGMPlans01Div" :style="{'background-color': selectedPtr===1?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="LSSPlans01Div" :style="{'background-color': selectedPtr===1?'#56cef3':'#ffffff'}"  style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--            <v-row align="center">-->
<!--              <v-col cols="1">-->
<!--                      <v-radio :value="2" ></v-radio>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="AGMPlans02Div" :style="{'background-color': selectedPtr===2?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="LSSPlans02Div" :style="{'background-color': selectedPtr===2?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--            <v-row align="center">-->
<!--              <v-col cols="1">-->
<!--                <v-radio :value="3" ></v-radio>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="AGMPlans03Div" :style="{'background-color': selectedPtr===3?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="LSSPlans03Div" :style="{'background-color': selectedPtr===3?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--            <v-row align="center">-->
<!--              <v-col cols="1">-->
<!--                <v-radio :value="4" ></v-radio>-->
<!--              </v-col>-->
<!--              <v-col >-->
<!--                <div id="AGMPlans04Div" :style="{'background-color': selectedPtr===4?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--              <v-col>-->
<!--                <div id="LSSPlans04Div" :style="{'background-color': selectedPtr===4?'#56cef3':'#ffffff'}" style="border: 2px solid black;width:350px; height:216px; margin: 0 auto"></div>-->
<!--              </v-col>-->
<!--            </v-row>-->
            </v-radio-group>
            </v-card>
          </v-col>
        </v-row>
          <v-spacer style="height: 20px"></v-spacer>
      </v-card>
    </v-container>

  </v-app>
</template>

<script>

	import aids_freq from "../assets/aids_freq";
	import aids_elabel_freq from "../assets/aids_elabel_freq"
	import wordnet_freq from "../assets/wordnet_freq"
	import aids_query from "../assets/aids_query"
	import wordnet_query from "../assets/wordnet_query"

	export default {
  name: 'HelloWorld',
  props: {
  },
  data:()=>({
      wordnetExLoadFlag:true,
      selectedPtr:0,
      aids_query,
      wordnet_query,
      displaysRoute:"../asset/5_cypher/",
      displayNums:null,
      colorPanel: {
		  background: '#DAE6E4',
		  foreground: '#D2A8B2',
		  textColor: 'black',
	  },
    graphHeader:[
      {text:"v1", value:"from", sortable:false},
      {text:"v1_label", value:"vLabel1", sortable:false},
      {text:"v2", value:"to", sortable:false},
      {text:"v2_label", value:"vLabel2", sortable:false},
      {text:"e_label", value:"eLabel", sortable:false},
      {text:"", value:"actions", sortable:false},
    ],
    dataHeader:[
      {text:"label", value:"label"},
      {text: "amount",value: "amount"}
    ],
    queryInfo:[],
    queryResult:{
      agm:[],
      lss:[],
    },
    displayFlag:true,
      resultPanel:null,
    queryInfoHeader:[
      {text: "category", value: "category"},
      {text:"joinTime", value:"joinTime"},
      {text:"overallTime", value:"overallTime"},
      {text:"planDistinctness", value:"planDistinctness"},
      {text:"planGenTime", value:"planGenTime"},
    ],
    totalQueryHeader:[
      {text:"AGM Plans", value:""},
      {text:"LSS Plans", value: ""},
    ],
    PlansResult:{
      agmPlans:[],
      lssPlans:[],
    },
    editedItem: {
    },
    previousItem:{},
    defaultItem: {

    },
    tabBind:0,
    mapMade:[false, false, false,false],
    readingFlag:false,
    editedIndex:0,
    panelDialog: false,
    radioGroup:"",
    datasetValue:"wordnet",
    myDiagram:null,
    diagramsShowcase:[],
    nodeNum:0,
    linkNum:0,
    makingFile:null,
    disFile:null,
    aids_freq,
    aids_elabel_freq,
    wordnet_freq,
    queryCode:"",
  }),
    mounted() {
      this.disFile = new Array(100);
      this.displayNums = new Array(100);
      for (let i =0;i<this.displayNums.length;i++) this.displayNums[i] = 0;
      this.diagramsShowcase = new Array(100);
      this.PlansResult.agmPlans = new Array(100);
      this.PlansResult.lssPlans = new Array(100);


      setTimeout(()=>{
        for (let i = 0; i < 10; i++) {
          this.makeMap("Dis0"+i+"Div", 15+i, true);
        }
		  for (let i = 0; i < 10; i++) {
			  this.makeMap("Dis0"+(i+15)+"Div", 30+i, true);
		  }
        this.makeMap();
        this.makeMap("AGMDiv",1,true);
        this.makeMap("LSSDiv",2,true);
        for (let i = 0; i < 5; i++) {
          this.makeMap("AGMPlans0" + i + "Div", 5 + i, true);
          this.makeMap("LSSPlans0" + i + "Div", 10 + i, true);
        }


      }, 1000);

      setTimeout(()=>{
		  for (let i = 0; i < 10; i++) {
			  this.loadMap(null, 15+i, this.aids_query[i]);
		  }
		  for (let i = 0; i < 10; i++) {
			  this.loadMap(null, 30+i, this.wordnet_query[i]);
		  }
      }, 1500);

    },

  watch:{
    selectedPtr:{
      handler(value){
        this.makeQuery(null,value);
      },
    }
  },



    methods:{

      editItem (item) {
        console.log(item)
        this.editedIndex = this.myDiagram.model.linkDataArray.indexOf(item);
        this.previousItem = item;
        this.editedItem = Object.assign({}, item);
        this.editedItem.vLabel1 = item.vLabel1?item.vLabel1:this.findLabelFromKey(item.from);
        this.editedItem.vLabel2 = item.vLabel2?item.vLabel2:this.findLabelFromKey(item.to);
        this.panelDialog = true;
      },

      closeDialog () {
        this.panelDialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      saveDialog () {
        console.log("save",this.editedItem)
        this.myDiagram.model.linkDataArray[this.editedIndex] = this.editedItem;
        console.log("should",this.myDiagram.model.linkDataArray[this.editedIndex])
        this.displayFlag = false;
        this.closeDialog();
        setTimeout(()=>{
          this.displayFlag = true;
        },100);
      },

      makeMap(givenDivName, givenDivOrder, isReadOnly){
        console.log(givenDivName, givenDivOrder)
        let $ = go.GraphObject.make;
        let diagramName = givenDivName?givenDivName:"myDiagramDiv";
        let robotDiagramOrder = givenDivOrder;
        // get tooltip text from the object's data
          /*
        let tooltipTextConverter = function(node) {
          let str = "id: "+node.key+"\n";
          if (node.relations) {
            str += "edges: \n";
            node.relations.forEach(relation => str+= '('+relation.toString()+")\n" );
          }
          if (node.cardinality !== undefined) str += "cardinality: \n" + node.cardinality + "\n";
          if (node.tiime !== undefined) str += "time: " + node.tiime + "\n";
          return str;
        }

           */
        let diagram = $(go.Diagram, String(diagramName),
          {
            "undoManager.isEnabled": false,
            isReadOnly : isReadOnly?isReadOnly:false,
            "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
            //"draggingTool.isEnabled" : false,//can't dragg
          });

        diagram.linkTemplate =
        $(go.Link, { toShortLength: 3, relinkableFrom: true, relinkableTo: true },// allow the user to relink existing links
          $(go.Shape, { strokeWidth: 2 }, new go.Binding("stroke", "color") ),
          /*$(go.Shape,{ toArrow: "Standard", stroke: null },new go.Binding("fill", "color")),*/
          new go.Binding("label")
        );

        // define tooltips for nodes
          /*
        let tooltiptemplate =
          $("ToolTip",
            { "Border.fill": "whitesmoke", "Border.stroke": "black" },
              $(go.TextBlock,
                {
                  font: "bold 6pt Helvetica, bold Arial, sans-serif",
                  wrap: go.TextBlock.WrapFit,
                  margin: 5
                },
                new go.Binding("text", "", tooltipTextConverter))
          );
          */


        if (!givenDivName || givenDivName && robotDiagramOrder>=15){
          diagram.nodeTemplate = $(go.Node,"Auto", {
          	locationSpot:go.Spot.Center/* toolTip: tooltiptemplate*/},
                  new go.Binding("location","loc"),
                  $(go.Panel, "Auto",
                          $(go.Shape, "Circle",
                                  {
                                  	//vertex setting
                                    width:40, height:40, stroke: "#000000",fill:"#D2A8B2",
                                    strokeWidth: 2, portId: "", cursor: "pointer",  // the Shape is the port, not the whole Node
                                    fromLinkable: true, fromLinkableSelfNode: false, fromLinkableDuplicates: false,
                                    toLinkable: true, toLinkableSelfNode: false, toLinkableDuplicates: false,
                                    //
                                  })
                  ),

                  $(go.TextBlock, "", {stroke:"#000000"},
                          new go.Binding("text","key"),
                  )
          );
        }
        else{
          diagram.nodeTemplate = $(go.Node,"Auto", {locationSpot:go.Spot.Center,/* toolTip: tooltiptemplate*/},
                  new go.Binding("location","loc"),
                  $(go.Panel, "Auto",
                          $(go.Shape, "RoundedRectangle",
                                  {
                                  	width:70,
                                    height:130,
                                    fill: "#D2A8B2", // the default fill, if there is no data bound value
                                    portId: "", cursor: "pointer",  // the Shape is the port, not the whole Node
                                    // allow all kinds of links from and to this port
                                    fromLinkable: false, fromLinkableSelfNode: false, fromLinkableDuplicates: false,
                                    toLinkable: false, toLinkableSelfNode: false, toLinkableDuplicates: false
                                  },
                                  new go.Binding("fill", "color")),
                          $(go.TextBlock,
                                  {
                                    font: "bold 12px  sans-serif",
                                    stroke: '#000000',
                                    margin: 6,  // make some extra space for the shape around the text
                                    isMultiline: true,  // don't allow newlines in text
                                    editable: true  // allow in-place editing by user
                                  },
                                  new go.Binding("text", "text").makeTwoWay()),  // the label shows the node data's text
                  )
          );
        }


        let myModel = $(go.GraphLinksModel, {});
        myModel.nodeDataArray = [];
        myModel.linkDataArray = [];
        diagram.model = myModel;

        if (!givenDivName){
          this.myDiagram = diagram;
          this.nodeNum = myModel.nodeDataArray.length;
        }
        else this.diagramsShowcase[robotDiagramOrder] = diagram;
      },

      findLabelFromKey(key){
        let node = this.myDiagram.findNodeForKey(key);
        return node.data.label;
      },

      getRefreshQueryCode(queryType){
        let headCode = "api/query/"+queryType+'/';
        let newCode = "";

        this.myDiagram.model.linkDataArray.forEach(item=>{
          let fromId = String.fromCharCode(96 + parseInt(item.from));
          let toId = String.fromCharCode(96 + parseInt(item.to));
          let fromLabel = item.vLabel1?item.vLabel1:this.findLabelFromKey(item.from);
          let toLabel = item.vLabel2?item.vLabel2:this.findLabelFromKey(item.to);
          newCode += "(" + fromId + ":" + fromLabel + ")";
          if (item.eLabel===-1 || !item.eLabel) newCode += "->(" + toId + ":" + toLabel + "),";
          else newCode += "-[" + item.eLabel + "]->(" + toId + ":" + toLabel + "),";
        });
        newCode = newCode.substring(0,newCode.length-1);//delete the last ','
        //console.log(newCode);
        newCode = escape(newCode);
        newCode = encodeURI(newCode);
        newCode = headCode + newCode;
          return newCode;
      },



      makeQuery(queryCode, selectId){

        this.queryResult.agm = [];
        this.queryResult.lss = [];
        this.queryInfo = []; // make its length 0,
        this.PlansResult.agmPlans = new Array(10);
        this.PlansResult.lssPlans = new Array(10);

        if (selectId===undefined || selectId===null){
          let clearList = [1,2,5,6,7,8,9,10,11,12,13,14];
          for (let i=0;i<clearList.length;i++){
            this.clearMap(clearList[i]);
          }
        }
        else {
          let clearList = [1,2];
          for (let i=0;i<clearList.length;i++){
            this.clearMap(clearList[i]);
          }
        }

        //console.log(queryCode, selectId);
        if (selectId !== undefined && selectId !==null) {
        	//panel 4 query
        	this.selectedPtr = selectId;
		}
        else this.selectedPtr = 0;//the panel2 query
        //console.log("***",this.selectedPtr)
        //let code = selectId!==undefined && selectId!==null?"api/plan/"+selectId:queryCode;
        //console.log("query",code);



        this.axios.get(!selectId?this.getRefreshQueryCode(this.datasetValue):"api/plan/"+selectId,{
          timeout: 60000
        })
        .then(response=>{
          console.log(response);
          if (response.data.error!==undefined) alert(response.data.error);
          let agm5 = response.data.AGMPlans;
          let lss5 = response.data.LSSPlans;
          if (selectId===undefined || selectId===null){

          }
          let queryResult = response.data.resultPanel || null;
          this.queryResultSize = response.data.resultPanel.resultSize;
          this.queryInfo = [
            {
              category:"agm Bound",
              joinTime:queryResult.joinTime[0],
              overallTime:queryResult.overallTime[0],
              planDistinctness:queryResult.planDistinctness[0],
              planGenTime:queryResult.planGenTime[0]
            },
            {
              category:"lss",
              joinTime:queryResult.joinTime[1],
              overallTime:queryResult.overallTime[1],
              planDistinctness:queryResult.planDistinctness[1],
              planGenTime:queryResult.planGenTime[1]
            },
          ];
          let that = this;

          //this.selectedPtr = 0;
          //panel 3
          //agm
          let panel3Key = 0;
          if (selectId!==undefined && selectId!==null) panel3Key = selectId;
			let graph = agm5[panel3Key];
          //get the greatest ones to be the 2nd
            let first = 0, sec = 0;
			for (let j=0;j<graph.edges.length;j++){
				let edge = graph.edges[j];
				let fromId = edge[0];
				let toId = edge[1];
				if (fromId===graph.nodes[0].nodeID || toId===graph.nodes[0].nodeID) first++;
				if (fromId===graph.nodes[1].nodeID || toId===graph.nodes[1].nodeID) sec++;
			}
			if (first>sec){
				let temp1 = graph.nodes[0];
				graph.nodes[0] = graph.nodes[1];
				graph.nodes[1] = temp1;
            }
            for (let j=0;j<graph.nodes.length;j++){
              let node = graph.nodes[j];
              let otherData = {
                relations: node.relations,
                cardinality: node.cardinality,
                time : node.tiime,
              }
              that.makeNode(node.nodeID, "noLabel", 1,j,otherData);
            }
            for (let j=0;j<graph.edges.length;j++){
              let edge = graph.edges[j];
              let fromId = edge[0];
              let toId = edge[1];
              that.makeEdge({from:fromId, to:toId},1);
            }

          //lss

            graph = lss5[panel3Key];
			//get the greatest ones to be the 2nd
			first = 0; sec = 0;
			for (let j=0;j<graph.edges.length;j++){
				let edge = graph.edges[j];
				let fromId = edge[0];
				let toId = edge[1];
				if (fromId===graph.nodes[0].nodeID || toId===graph.nodes[0].nodeID) first++;
				if (fromId===graph.nodes[1].nodeID || toId===graph.nodes[1].nodeID) sec++;
			}
			if (first>sec){
				let temp1 = graph.nodes[0];
				graph.nodes[0] = graph.nodes[1];
				graph.nodes[1] = temp1;
			}


            for (let j=0;j<graph.nodes.length;j++){
              let node = graph.nodes[j];
              let otherData = {
                relations: node.relations,
                cardinality: node.cardinality,
                time : node.tiime,
              }
              that.makeNode(node.nodeID, "noLabel", 2,j,otherData);
            }
            for (let j=0;j<graph.edges.length;j++){
              let edge = graph.edges[j];
              let fromId = edge[0];
              let toId = edge[1];
              that.makeEdge({from:fromId, to:toId},2);
            }

          //Panel 4
          //agm
          if (selectId===undefined || selectId===null){
            let idOffset = 5;
            for (let i=0;i<agm5.length;i++){
              let graph = agm5[i];
				//get the greatest ones to be the 2nd
				first = 0; sec = 0;
				for (let j1=0;j1<graph.edges.length;j1++){
					let edge = graph.edges[j1];
					let fromId = edge[0];
					let toId = edge[1];
					if (fromId===graph.nodes[0].nodeID || toId===graph.nodes[0].nodeID) first++;
					if (fromId===graph.nodes[1].nodeID || toId===graph.nodes[1].nodeID) sec++;
				}
				if (first>sec){
					let temp1 = graph.nodes[0];
					graph.nodes[0] = graph.nodes[1];
					graph.nodes[1] = temp1;
				}
              for (let j=0;j<graph.nodes.length;j++){
                let node = graph.nodes[j];
                let otherData = {
                  relations: node.relations,
                  cardinality: node.cardinality,
                  time : node.tiime,
                }
                that.makeNode(node.nodeID, "noLabel", idOffset+i,j,otherData);
              }
              for (let j=0;j<graph.edges.length;j++){
                let edge = graph.edges[j];
                let fromId = edge[0];
                let toId = edge[1];
                that.makeEdge({from:fromId, to:toId},idOffset+i);
              }
            }

            //lss
            idOffset = 10;
            for (let i=0;i<lss5.length;i++){
              let graph = lss5[i];
				//get the greatest ones to be the 2nd
				first = 0; sec = 0;
				for (let j1=0;j1<graph.edges.length;j1++){
					let edge = graph.edges[j1];
					let fromId = edge[0];
					let toId = edge[1];
					if (fromId===graph.nodes[0].nodeID || toId===graph.nodes[0].nodeID) first++;
					if (fromId===graph.nodes[1].nodeID || toId===graph.nodes[1].nodeID) sec++;
				}
				if (first>sec){
					let temp1 = graph.nodes[0];
					graph.nodes[0] = graph.nodes[1];
					graph.nodes[1] = temp1;
				}
              for (let j=0;j<graph.nodes.length;j++){
                let node = graph.nodes[j];
                let otherData = {
                  relations: node.relations,
                  cardinality: node.cardinality,
                  time : node.tiime,
                }
                that.makeNode(node.nodeID, "noLabel", idOffset+i,j,otherData);
              }
              for (let j=0;j<graph.edges.length;j++){
                let edge = graph.edges[j];
                let fromId = edge[0];
                let toId = edge[1];
                that.makeEdge({from:fromId, to:toId},idOffset+i);
              }
            }
          }

        })
                .catch(error => {
					if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
						alert("The query can not finish in 1min. Please retry.")
					}
					//else alert("query failed.");
                });

      },

      makeNode( key, label, robotDiagramId, order, otherData) {
        console.log(key, label, robotDiagramId, order, otherData);

        let panel34Pos = [{x:-150, y:70},{x:-40 ,y:0},{x:70, y:70},{x:-40, y:140}];
        let disPos = [{},
                  {x: 0, y: 0}, {x: 60, y: 0}, {x: 90, y: 70},
                  {x: 60, y:135}, {x:0, y:135}, {x:-30, y:70}];
        let panel2Pos = [
          {},
          {x: -90, y: -110}, {x: 30, y: -110}, {x: 90, y: -10},
          {x: 30, y:90}, {x:-90, y:90}, {x:-150, y:-10}
        ]
        //270*370, 300*160
          if (!key){
            let x =Math.random() * 200 , y= Math.random() * 320
            this.nodeNum = this.myDiagram.model.nodeDataArray.length;
            this.nodeNum ++;
            let newlabel = this.nodeNum;
            this.myDiagram.model.addNodeData({label: newlabel, key: this.nodeNum,});
            let tar = this.myDiagram.findNodeForKey(this.nodeNum);
            if (this.nodeNum<=6 && !key){
              x= panel2Pos[this.nodeNum].x;
              y = panel2Pos[this.nodeNum].y;

            }
            tar.position.set(new go.Point(x, y));
          }
        else if (key && robotDiagramId>=15){
          let x =Math.random() * 200 , y= Math.random() * 320
            this.displayNums[robotDiagramId]++;
            let newlabel = this.displayNums[robotDiagramId];
            this.diagramsShowcase[robotDiagramId].model.addNodeData({label: label?label:newlabel, key: newlabel,});
            let tar = this.diagramsShowcase[robotDiagramId].findNodeForKey(this.displayNums[robotDiagramId]);
          if ( this.displayNums[robotDiagramId]<=6) {
            x = disPos[this.displayNums[robotDiagramId]].x;
            y = disPos[this.displayNums[robotDiagramId]].y;
          }
            tar.position.set(new go.Point(x, y));
        }
        else if (!robotDiagramId){//main panel automatic
            this.myDiagram.model.addNodeData({label:label, key: key, });
            let tar = this.myDiagram.findNodeForKey(key);

            let x =Math.random() * 200 , y= Math.random() * 320
            if (key <=6){
              x= panel2Pos[key].x;
              y = panel2Pos[key].y;
            }
            tar.position.set(new go.Point(x, y));
        }
        else {

          let str = "edges: \n";
          if (otherData){
            for (let i=0;i<otherData.relations.length;i++){
              let relation = otherData.relations[i];
              str+= '('+relation.toString()+") ";
              if (i % 2 === 1) str += '\n'
            }
            if (otherData.relations.length % 2 === 1) str += '\n'
            if (otherData.cardinality !== undefined) str += "cardinality: \n" + otherData.cardinality + "\n";
            if (otherData.time !== undefined) str += "time: " + otherData.time + "\n";
          }
          this.diagramsShowcase[robotDiagramId].model.addNodeData({
            label: label, key: key,
            relations: otherData?otherData.relations:"", cardinality: otherData?otherData.cardinality:"",
            text : str,
          });
          let tar = this.diagramsShowcase[robotDiagramId].findNodeForKey(key);
          if (order!==undefined && robotDiagramId<15) tar.position.set(new go.Point(panel34Pos[order].x, panel34Pos[order].y));
          else tar.position.set(new go.Point(Math.random() * 250, Math.random() * 150));


        }
      },

      makeEdge(data, robotDiagramId){
        if (!robotDiagramId) this.myDiagram.model.addLinkData(data);
        else this.diagramsShowcase[robotDiagramId].model.addLinkData(data);
      },

      delNode() {
        //selection shows the selected collections for a diagram
        //use first() to get the first selected object
        var tar = this.myDiagram.selection.first();

        if (!tar || !tar.type || !tar.type.name ) console.log(tar)
        else switch (tar.type.name) {
            case "Link":{ this.myDiagram.model.removeLinkData(tar.data); break;}
            case "Auto":{
              //delete all related links
              //linksConnected iterator has a problem with the last item when deleting so I use another js array to operate instead
              var relatedLinks = [];
              tar.linksConnected.each((item)=>{ relatedLinks.push(item); });
              relatedLinks.forEach(item=> {if (!!item) this.myDiagram.model.removeLinkData(item.data)} );
              this.myDiagram.model.removeNodeData(tar.data);
              break;
            }
        }
      },

      clearMap(robotDiagramId){
        console.log(robotDiagramId)
        let nodesList = [];
        let linksList = [];
        if (!robotDiagramId){
          this.myDiagram.model.nodeDataArray.forEach(item=>{ nodesList.push(item) });
          nodesList.forEach(item =>{this.myDiagram.model.removeNodeData(item); });
          this.myDiagram.model.linkDataArray.forEach(item=>{ linksList.push(item) });
          linksList.forEach(item=>{this.myDiagram.model.removeLinkData(item); });
          this.nodeNum = 0;
        }
        else{
          this.diagramsShowcase[robotDiagramId].model.nodeDataArray.forEach(item=>{ nodesList.push(item) });
          nodesList.forEach(item =>{this.diagramsShowcase[robotDiagramId].model.removeNodeData(item); });
          this.diagramsShowcase[robotDiagramId].model.linkDataArray.forEach(item=>{ linksList.push(item) });
          linksList.forEach(item=>{this.diagramsShowcase[robotDiagramId].model.removeLinkData(item); });
        }

        console.log("clear map done")
      },

      loadMap(file, robotDiagramId, targetStr){
        console.log("load map", robotDiagramId,file,targetStr);


          let reader = new FileReader();
          let str = "";
          let edges = [];
          let nodes = [];
          let nodeInfo = [];



        if (file!==undefined && file!==null){
          this.clearMap();
          reader.readAsText(file,"UTF-8");
          reader.onload = (e)=>{
            str = unescape( e.target.result );
            console.log(str);
            let edgeStrs = str.split(',');

            edgeStrs.forEach(str =>{
              let reg = new RegExp(/\(|\)|\[|\]|\>/,"g");
              let newItem = {};
              let temp = str.replace(reg,'').split('-');

              if (temp.length === 2){
                //若eLabel为-1, 则-[eLabel]-> 写成 ->
                newItem["from"] = temp[0].split(':')[0].charCodeAt()-96;
                newItem["to"] = temp[1].split(':')[0].charCodeAt()-96;

                newItem["vLabel1"] = temp[0].split(":")[1];
                newItem["vLabel2"] = temp[1].split(":")[1];

                newItem["eLabel"] = -1;//we don't have label
              }
              else{
                //([alphabet]:[number])-[ [number] ]->([alphabet]:[number])
                newItem["from"] = temp[0].split(':')[0].charCodeAt()-96;
                newItem["to"] = temp[2].split(':')[0].charCodeAt()-96;

                newItem["vLabel1"] = temp[0].split(":")[1];
                newItem["vLabel2"] = temp[2].split(":")[1];

                newItem["eLabel"] = temp[1];
              }

              //from vertex push
              if (nodes.indexOf(newItem.from)===-1) {
                nodes.push(newItem.from);
                nodeInfo.push({key: newItem.from, label:newItem.vLabel1} );
              }
              //to vertex push
              if (nodes.indexOf(newItem.to)===-1) {
                nodes.push(newItem.to);
                nodeInfo.push({key: newItem.to, label:newItem.vLabel2} );
              }
              edges.push(newItem);
            })
            nodeInfo.forEach(node =>{ this.makeNode(node.key, node.label, robotDiagramId); });
            edges.forEach(edge =>{ this.makeEdge(edge, robotDiagramId); });
            //this.refreshQueryCode(this.datasetValue);
          }
        }
        else if (targetStr!==undefined){
          this.clearMap(robotDiagramId);
          str = targetStr;
          console.log(str);
          let edgeStrs = str.split(',');

          edgeStrs.forEach(str =>{
            let reg = new RegExp(/\(|\)|\[|\]|\>/,"g");
            let newItem = {};
            let temp = str.replace(reg,'').split('-');

            if (temp.length === 2){
              //若eLabel为-1, 则-[eLabel]-> 写成 ->
              newItem["from"] = temp[0].split(':')[0].charCodeAt()-96;
              newItem["to"] = temp[1].split(':')[0].charCodeAt()-96;

              newItem["vLabel1"] = temp[0].split(":")[1];
              newItem["vLabel2"] = temp[1].split(":")[1];

              newItem["eLabel"] = -1;//we don't have label
            }
            else{
              //([alphabet]:[number])-[ [number] ]->([alphabet]:[number])
              newItem["from"] = temp[0].split(':')[0].charCodeAt()-96;
              newItem["to"] = temp[2].split(':')[0].charCodeAt()-96;

              newItem["vLabel1"] = temp[0].split(":")[1];
              newItem["vLabel2"] = temp[2].split(":")[1];

              newItem["eLabel"] = temp[1];
            }

            //from vertex push
            if (nodes.indexOf(newItem.from)===-1) {
              nodes.push(newItem.from);
              nodeInfo.push({key: newItem.from, label:newItem.vLabel1} );
            }
            //to vertex push
            if (nodes.indexOf(newItem.to)===-1) {
              nodes.push(newItem.to);
              nodeInfo.push({key: newItem.to, label:newItem.vLabel2} );
            }
            edges.push(newItem);
          })
          nodeInfo.forEach(node =>{ this.makeNode(node.key, node.label, robotDiagramId); });
          edges.forEach(edge =>{ this.makeEdge(edge, robotDiagramId); });
        }
      },

      openInput(divId){
        document.getElementById(divId).click();
      }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .gojspanel_basic{
        background-color: #DAE6E4;
    }

    .example_patterns_gojspanel{
        border: 2px solid black;
        width:180px;
        height:190px;
        margin: 0 auto;
    }

    .query_graph_gojspanel{
        width:350px;
        height:300px;
        border: 2px solid black;
        margin: 0 auto;
    }

    .plans_gojspanel{
        border: 2px solid black;
        width:320px;
        height:220px;
        margin: 0 auto;
    }

    .agm_gojspanel{
        width:320px; border: 2px solid black;height:220px; margin: 0 auto
    }

    .lss_gojspanel{
        width:320px; border: 2px solid black;height:220px; margin: 0 auto
    }

    .title{
        font-size: 30px;
        font-family: "Arial",serif;
    }
    .formal{
        font-size: 25px;
        font-family: "Comic Sans MS", "Comic Sans" ,serif;
    }
    .header{
        font-size: 10px;
        font-family: "Arial",serif;
    }


</style>
