
### **Importing Libraries**
```python
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from matplotlib.lines import Line2D
from matplotlib.cm import ScalarMappable
from matplotlib.colors import Normalize
```
- **`pandas`**: Used for data manipulation and analysis.
- **`geopandas`**: Extends pandas to work with geospatial data such as shapefiles.
- **`matplotlib.pyplot`**: Used for creating visualizations and plots.
- **`Line2D`**: Creates custom legend elements for matplotlib plots.
- **`ScalarMappable`** and **`Normalize`**: Normalize data values to fit a specific range for consistent colormap scaling.

---

### **Loading Data**
```python
intervention_data = pd.read_excel('/content/intervention_data_new (1).xlsx')
population_data = pd.read_excel('/content/pop_chie_data.xlsx')
shapefile = gpd.read_file('/content/Chiefdom 2021.shp')
```
- **`intervention_data`**: Loads an Excel file containing LLINs and penta3 intervention data.
- **`population_data`**: Loads another Excel file with population statistics for each chiefdom.
- **`shapefile`**: Reads a geospatial shapefile containing boundary information for chiefdoms.

---

### **Ensuring Year Column is Integer**
```python
intervention_data['year'] = intervention_data['year'].astype(int)
```
- Converts the `year` column in `intervention_data` to integers. This ensures consistent data type for grouping and calculations.

---

### **Preparing Columns for Summing LLINs Data by Year**
```python
years = intervention_data['year'].unique()
columns = ['adm3'] + [f'llins_penta3_tot_{year}' for year in years]
summed_df = pd.DataFrame()
```
- **`years`**: Extracts the unique years from the `year` column.
- **`columns`**: Prepares a list of column names for a new DataFrame, with one column for each year's LLINs total.
- **`summed_df`**: Initializes an empty DataFrame to store yearly totals for each chiefdom.

---

### **Aggregating LLINs Totals for Each Year**
```python
for year in years:
    yearly_data = intervention_data[intervention_data['year'] == year]
    yearly_summed = yearly_data.groupby('adm3', as_index=False)['llins_penta3_tot'].sum()
    yearly_summed.rename(columns={'llins_penta3_tot': f'llins_penta3_tot_{year}'}, inplace=True)
    if summed_df.empty:
        summed_df = yearly_summed
    else:
        summed_df = pd.merge(summed_df, yearly_summed, on='adm3', how='outer')
```
- Loops through each year in `years`:
  1. **`yearly_data`**: Filters rows for the current year.
  2. **`yearly_summed`**: Groups `yearly_data` by `adm3` and sums `llins_penta3_tot`.
  3. Renames the `llins_penta3_tot` column to include the year (e.g., `llins_penta3_tot_2020`).
  4. Merges the yearly totals into the `summed_df` DataFrame.

---

### **Saving the Summed Data**
```python
summed_df.to_excel('/content/summed_llins_penta3_data.xlsx', index=False)
print("Summed data saved to Excel.")
```
- Saves the aggregated LLINs data to an Excel file for external use.

---

### **Merging with Population Data**
```python
merge_pop = population_data.merge(summed_df, on='adm3', how='left', validate='1:1')
merge_pop.to_excel('/content/merge_pop.xlsx', index=False)
print("Merged data saved to Excel.")
```
- Merges `population_data` with the summed LLINs data (`summed_df`) on `adm3`.
- Saves the merged DataFrame to an Excel file.

---

### **Merging with Geospatial Data**
```python
gdf = shapefile.merge(merge_pop, how='left', on=['FIRST_DNAM', 'FIRST_CHIE'], validate='1:1')
```
- Merges the shapefile (`shapefile`) with `merge_pop` using administrative names (`FIRST_DNAM`, `FIRST_CHIE`) to align geospatial and tabular data.

---

### **Calculating Coverage for Each Year**
```python
for year in years:
    pop_column = f'pop{year}'
    penta_column = f'llins_penta3_tot_{year}'
    coverage_column = f'coverage_{year}'

    if pop_column in gdf.columns and penta_column in gdf.columns:
        gdf[coverage_column] = (gdf[penta_column] / (gdf[pop_column] * 0.027)) * 100
        print(f"Calculated {coverage_column} for year {year}")
    else:
        print(f"Skipping {year}: Missing {pop_column} or {penta_column}")
```
- For each year:
  - Constructs column names for population, LLINs total, and coverage.
  - Where 0.027 is the proportion of surviving infants
  - Adds a new `coverage` column for each year to the GeoDataFrame.

---

### **Categorizing Coverage Values**
```python
def categorize_coverage(value):
    if pd.isnull(value):
        return None
    elif value < 20:
        return '<20%'
    elif value <= 40:
        return '20-40%'
    elif value <= 60:
        return '41-60%'
    elif value <= 80:
        return '61-80%'
    else:
        return '81-100%'
```
- Defines a function to classify coverage values into predefined categories based on percentage ranges.

```python
for year in years:
    coverage_column = f'coverage_{year}'
    category_column = f'category_{year}'
    if coverage_column in gdf.columns:
        gdf[category_column] = gdf[coverage_column].apply(categorize_coverage)
```
- Applies the `categorize_coverage` function to create categorized columns for each year.

---

### **Plotting Coverage Maps**
```python
fig, axes = plt.subplots(nrows=len(years) // 2 + len(years) % 2, ncols=9, figsize=(15, 5 * len(years) // 2))
axes = axes.flatten()
```
- Creates subplots for visualizing LLINs coverage for each year. Adjusts rows and columns dynamically based on the number of years.

---

### **Defining Colormap and Legend**
```python
cmap = plt.cm.RdYlGn
norm = Normalize(vmin=0, vmax=100)

coverage_categories = ['<20%', '20-40%', '41-60%', '61-80%', '81-100%']
category_bounds = [0, 20, 40, 60, 80, 100]

legend_elements = []
for i in range(len(coverage_categories)):
    midpoint = (category_bounds[i] + category_bounds[i + 1]) / 2
    color = cmap(norm(midpoint))
    legend_elements.append(Line2D([0], [0], color=color, lw=4, label=coverage_categories[i]))
```
- Defines a colormap (`RdYlGn`) and normalizes it to 0-100%.
- Dynamically creates legend elements for each coverage category.

---

### **Plotting Each Year’s Coverage**
```python
for i, year in enumerate(years):
    ax = axes[i]
    category_column = f'category_{year}'
    if category_column in gdf.columns:
        gdf.plot(
            column=category_column,
            cmap='RdYlGn',
            legend=False,
            ax=ax,
            edgecolor='black'
        )
        ax.set_title(f'{year}')
        ax.axis('off')
```
- Plots each year’s coverage data on its respective subplot.

---

### **Finalizing the Plot**
```python
for j in range(i + 1, len(axes)):
    fig.delaxes(axes[j])
```
- Removes unused subplot axes to avoid clutter.

```python
fig.legend(handles=legend_elements, title='LLINs given during penta3 coverage (%)', loc='upper center', bbox_to_anchor=(0.5, 1.02), ncol=len(coverage_categories))
```
- Adds a single, unified legend to the figure.

```python
plt.tight_layout()
plt.savefig('LLINs given during penta3 coverage.png', bbox_inches='tight', dpi=300)
plt.show()
```
- Adjusts layout, saves the plot as a PNG file, and displays it.

---

