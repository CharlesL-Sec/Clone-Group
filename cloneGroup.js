# Create a new UI page to capture the user information

### To Create the UI page (From). This page will appear in the ServiceNow menu bar.
- goto system UI -> UI Pages (sys_ui_page.list)
- Click new
- Provide the name for this UI page e.g. _CLone user groups_

H## TML Jelly
'''html
<g:ui_form>
    <table width="100%">
        <g:evaluate var="jvar_current_user"
        expression="RP.getWindowProperties().get('current_user')" />
        <tr id="itemrow" >
            <td>
                <div class="form-group form-horizontal">
                    <div class="col-md-3 text-right">
                        <g:form_label>
                            Source
                        </g:form_label>
                    </div>
                    <div class="col-md-8">
                        <g:ui_reference name="source_ref_field" id="source_ref_field" table="sys_user" value="${jvar_current_user}" />
                    </div>
                </div>   
            </td>
        </tr>
        <tr id="itemrow" >
            <td>
                <div class="form-group form-horizontal">
                    <div class="col-md-3 text-right">
                        <g:form_label>
                            Recipient
                        </g:form_label>
                    </div>
                    <div class="col-md-8">
                        <g:ui_reference name="recipient_ref_field" id="recipient_ref_field" query="active=true" table="sys_user"  />
                    </div>
                </div>   
            </td>
        </tr>
        <tr id ="poll_img" style="display:none" border="1">
            <td colspan="2"  align="center" width="300px">        
                <img src="./images/ajax-loader.gifx" alt="${gs.getMessage('Please Wait')}" />
                <p id="poll_text" style="font-weight:bold;">
                    ${gs.getMessage('Please Wait')}
                </p>
            </td>
        </tr>
        <tr><td colspan="2">
        </td></tr>
        <tr id="dialogbuttons"><td colspan="2" align="right">
            <g:dialog_buttons_ok_cancel ok="return cloneGroups()" />
        </td>
        </tr>
    </table>
</g:ui_form> 
```









