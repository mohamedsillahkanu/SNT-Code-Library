import streamlit as st
from streamlit_option_menu import option_menu

with st.sidebar:
    selected=option_menu(

        menu_title="Table of content",
        options=["Shapefiles", "HF List", "Routine Data"],
        icons=["house","book","book"],
        menu_icon="cast",
        default_index=0,
        orientation="horizontal",
    )

if selected=="Home":
    st.write(" Success")

if selected=="HF List":
    st.write(" Success")

if selected=="Routine Data":
    st.write(" Success")
    
