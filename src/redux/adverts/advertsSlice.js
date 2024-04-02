import{ createSlice } from "@reduxjs/toolkit";
import { addAdvertsThunk, fetchAllAdvertsThunk, fetchByPaginationAdvertsThunk } from "./advertsOperations";
import { toast } from "react-toastify";

const slice = createSlice({
    name: "adverts",
    initialState: {
      
            advertsByPagination: [],
            allAdverts: [],
            filter:null,
       
        isLoading: false,
        error: null,
        isAdded: false,
        favAdverts: [],
        page:1
    },
    selectors: {
      selectIsAdded: state=>state.isAdded,  
      selectIsLoading: state=>state.isLoading,  
      selectAllAdverts: state=>state.allAdverts,  
      selectPartOfAdverts: state=>state.advertsByPagination,  
      selectFilterData: state=>state.filter,  
      selectFavAdverts: state=>state.favAdverts,  
      selectPage: state=>state.page,  
    },
    reducers: { 
        getFilterData: (state, { payload }) => {
            state.filter = payload;
        },
        addToFav: (state, { payload }) => {
            state.favAdverts.push(payload);
            toast.success('The ad has been added to your favorites')
        },
        removeFromFav: (state, { payload }) => {
        state.favAdverts = state.favAdverts.filter(advert => advert.id !== payload); 
        toast.info('The ad has been removed from your favorites')
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addAdvertsThunk.fulfilled, (state, { payload }) => {
                state.isAdded = true;
            })
            .addCase(fetchByPaginationAdvertsThunk.fulfilled, (state, { payload }) => {
                state.page===1 ? state.advertsByPagination=payload : state.advertsByPagination.push(...payload)
                state.error = null
                state.isLoading = false
                state.page+=1
            })
            .addCase(fetchAllAdvertsThunk.fulfilled, (state, { payload }) => {
            state.allAdverts=payload.data 
            })
        .addCase(fetchByPaginationAdvertsThunk.pending, (state, { payload }) => {
            state.isLoading = true
            state.error=null
        })
        .addCase(fetchByPaginationAdvertsThunk.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
            toast.error(payload)
            })
    },
    
})

export const advertsReducer = slice.reducer
export const { selectIsAdded, selectAllAdverts,selectPartOfAdverts,selectFilterData,selectFavAdverts,selectIsLoading,selectPage } = slice.selectors
export const {getFilterData,addToFav,removeFromFav} = slice.actions