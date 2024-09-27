import streamlit as st
import geopandas as gpd
import matplotlib.pyplot as plt

# Function to import shapefiles
def import_shapefile(uploaded_file):
    return gpd.read_file(uploaded_file)

# Function to rename and match names
def rename_and_match(gdf, column_mapping):
    gdf.rename(columns=column_mapping, inplace=True)
    return gdf

# Function to link shapefiles to relevant scales
def link_shapefiles_to_scales(gdf, scale_data):
    # Example linking logic (customize as needed)
    gdf['linked_scale'] = gdf['some_column'].map(scale_data)
    return gdf

# Function to visualize shapefiles
def visualize_shapefile(gdf):
    fig, ax = plt.subplots(1, 1, figsize=(10, 10))
    gdf.plot(ax=ax, color='lightblue', edgecolor='black')
    plt.title('Shapefile Visualization')
    plt.axis('off')
    st.pyplot(fig)

# Main Streamlit app
def main():
    st.sidebar.title("Shapefile Management App")
    
    # Navigation buttons
    option = st.sidebar.radio("Choose an option:", 
                               ("Import Shapefile", "Rename and Match Names", 
                                "Link Shapefiles to Scales", "Visualize Shapefile"))

    if option == "Import Shapefile":
        st.subheader("Import Shapefile")
        uploaded_file = st.file_uploader("Choose a shapefile", type=["shp"])
        if uploaded_file:
            gdf = import_shapefile(uploaded_file)
            st.write("Shapefile loaded successfully.")
            st.write(gdf.head())

    elif option == "Rename and Match Names":
        st.subheader("Rename and Match Names")
        # Placeholder for gdf, you need to manage state or pass gdf around
        column_mapping = st.text_input("Enter column mapping as JSON", '{"old_name": "new_name"}')
        if st.button("Rename"):
            if 'gdf' in locals():
                import json
                mapping = json.loads(column_mapping)
                gdf = rename_and_match(gdf, mapping)
                st.write("Columns renamed successfully.")
                st.write(gdf.head())
            else:
                st.error("Load a shapefile first.")

    elif option == "Link Shapefiles to Scales":
        st.subheader("Link Shapefiles to Relevant Scales")
        # Placeholder for gdf and scale_data
        scale_data_input = st.text_input("Enter scale data as JSON", '{"value": "scale"}')
        if st.button("Link Scales"):
            if 'gdf' in locals():
                scale_data = json.loads(scale_data_input)
                gdf = link_shapefiles_to_scales(gdf, scale_data)
                st.write("Shapefiles linked to scales successfully.")
                st.write(gdf.head())
            else:
                st.error("Load a shapefile first.")

    elif option == "Visualize Shapefile":
        st.subheader("Visualize Shapefile")
        if 'gdf' in locals():
            visualize_shapefile(gdf)
        else:
            st.error("Load a shapefile first.")

