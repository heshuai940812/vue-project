import reqwest from 'reqwest';

export const fun = ({ commit }) => {
	reqwest({
      url: `http://139.196.141.171:8080/api/fund/fund_info`,
      method: 'post',
      contentType: 'application/json',
      crossOrigin: true,
      data: JSON.stringify({ fund_id:'JR000420', data_freq:'周度' }),
      dataType: 'json',
    }).then(msg => {
    	commit({
  			type:'getMsg',
  			msg: 'Hello World'
  		});
    })
};