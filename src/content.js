import React from "react";

function Content(){
    return(
        <div>

            <div class="container"> 

                <div class="text-center ">


                <tabel >
                    <tr>
                        <th> S.no</th>
                        <th>Name</th>
                        <th>year</th>
                        <th>Dept</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Agash</td>
                        <td>4</td>
                        <td>CSE</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Hesventh</td>
                        <td>4</td>
                        <td>CSE</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jaswanth</td>
                        <td>4</td>
                        <td>CSE</td>
                    </tr>
                    
                </tabel>  
                    
                    
                </div> 

                

               <div id="formb" class="my-5  d-flex justify-content-center">
                    <form class="border border-2 border-dark p-5 " >
                        <div class="row  ">
                            <div class="col-12 p-1">
                                <label>Username:</label>
                                <input type="text" class="form-control"></input>
                            </div>
                            
                            <div class="col-12 p-1">
                               <label>Password:</label>
                                <input type="password" class="form-control"></input>

                            </div>
                            <div class="col-12 p-1">
                               
                              <button class="px-5" >Sumbit</button>

                            </div>
                        </div>

                       

                    </form>  

               </div>

            </div>
         
        </div>
    );
}
export default Content;