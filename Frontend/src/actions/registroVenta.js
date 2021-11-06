import { types } from "../types/types";
import { fetchSinToken } from "../helpers/fetch";

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const resp = await fetchSinToken("ventas", event, "POST");
      const body = await resp.json();

      // console.log(body)

      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name: name,
        };
        //console.log( event );
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // return async(dispatch)=>{
  //     const resp = await fetchConToken('events', event, 'POST');
  //     const body = await resp.json();
  //     console.log(body)
  // }
};

const eventAddNew = (event) => ({
  type: types.ventaAddNew,
  payload: event,
});