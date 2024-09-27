

import streamlit as st
from streamlit_option_menu import option_menu

# First Table of Content in the sidebar
with st.sidebar:
    with st.expander("Table of Content 1", expanded=True):
        selected_toc1 = option_menu(
            menu_title=None,  # No title inside the expander
            options=["Shapefiles", "HF List", "Routine Data"],
            icons=["house", "list", "file"],
            menu_icon="cast",
            default_index=0,
            orientation="vertical",
        )

# Content display based on the first Table of Content selection
if selected_toc1 == "Shapefiles":
    with st.expander("Shapefiles Section", expanded=True):
        st.code("""
# Sample code for working with shapefiles in Python
import geopandas as gpd

# Load the shapefile
shapefile_path = 'path_to_shapefile.shp'
gdf = gpd.read_file(shapefile_path)

# Display some basic information
print(gdf.head())
        """, language="python")

elif selected_toc1 == "HF List":
    with st.expander("HF List Section", expanded=False):
        st.write("This section will display the Health Facility List.")
        st.write("Success: HF List content goes here!")

elif selected_toc1 == "Routine Data":
    with st.expander("Routine Data Section", expanded=False):
        st.write("This section will handle Routine Data.")
        st.write("Success: Routine Data content goes here!")


# Second Table of Content in the sidebar
with st.sidebar:
    with st.expander("Table of Content 2", expanded=True):
        selected_toc2 = option_menu(
            menu_title=None,  # No title inside the expander
            options=["Option A", "Option B", "Option C"],
            icons=["gear", "info", "chart-bar"],
            menu_icon="cast",
            default_index=0,
            orientation="vertical",
        )

# Content display based on the second Table of Content selection
if selected_toc2 == "Option A":
    with st.expander("Option A Section", expanded=True):
        st.write("Content for Option A goes here.")

elif selected_toc2 == "Option B":
    with st.expander("Option B Section", expanded=False):
        st.write("Content for Option B goes here.")

elif selected_toc2 == "Option C":
    with st.expander("Option C Section", expanded=False):
        st.write("Content for Option C goes here.")
