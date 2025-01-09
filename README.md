### README: Filtering Active Health Facilities Using R

---

#### Overview

This project demonstrates how to filter health facilities (`hf_uid`) from a dataset based on their activity. A health facility is considered active if the sum of specific variables (`allout`, `susp`, `test`, `conf`, `maltreat`) across all its records is greater than zero. Rows corresponding to inactive health facilities are excluded from the final dataset.

---

#### Example Input

##### Input Data (`df`):
| hf_uid | year | month | allout | susp | test | conf | maltreat |
|--------|------|-------|--------|------|------|------|----------|
| 1      | 2023 | 1     | 10     | 5    | 15   | 10   | 20       |
| 1      | 2023 | 2     | 0      | 0    | 0    | 0    | 0        |
| 2      | 2023 | 1     | 0      | 0    | 0    | 0    | 0        |
| 2      | 2023 | 2     | 0      | 0    | 0    | 0    | 0        |
| 3      | 2023 | 1     | 5      | 0    | 5    | 0    | 0        |
| 3      | 2023 | 2     | 10     | 5    | 10   | 5    | 5        |

---

#### Output Data

##### Filtered Data (`df_active_hf`):
| hf_uid | year | month | allout | susp | test | conf | maltreat |
|--------|------|-------|--------|------|------|------|----------|
| 1      | 2023 | 1     | 10     | 5    | 15   | 10   | 20       |
| 1      | 2023 | 2     | 0      | 0    | 0    | 0    | 0        |
| 3      | 2023 | 1     | 5      | 0    | 5    | 0    | 0        |
| 3      | 2023 | 2     | 10     | 5    | 10   | 5    | 5        |

---

#### R Code with `for` Loop

The following code uses a `for` loop to identify active health facilities and filter the dataset:

```R
# Step 1: Add df_active column to the original DataFrame
df <- df %>%
  mutate(
    df_active = ifelse(rowSums(select(., allout, susp, test, conf, maltreat), na.rm = TRUE) > 0, 1, 0)
  )

# Step 2: Initialize an empty vector to store valid hf_uid values
valid_hf_uid <- c()

# Step 3: Iterate over unique hf_uid and calculate the total sum for each
for (hf in unique(df$hf_uid)) {
  # Subset rows for the current hf_uid
  hf_subset <- df %>% filter(hf_uid == hf)
  
  # Calculate the total sum for the specified columns
  total_sum <- sum(hf_subset$allout, hf_subset$susp, hf_subset$test, hf_subset$conf, hf_subset$maltreat, na.rm = TRUE)
  
  # If total_sum > 0, add the hf_uid to the valid list
  if (total_sum > 0) {
    valid_hf_uid <- c(valid_hf_uid, hf)
  }
}

# Step 4: Filter the original DataFrame to keep only valid hf_uid
df_active_hf <- df %>% filter(hf_uid %in% valid_hf_uid)

# View the result
head(df_active_hf)
```

---

#### Notes

1. **Efficiency**:
   - The `for` loop approach is less efficient than using vectorized functions from `dplyr`, especially for large datasets. However, it is useful for understanding the process step-by-step.

2. **Clarity**:
   - This approach demonstrates how to iterate over groups (`hf_uid`) and apply conditional logic to filter the data.

3. **Use Cases**:
   - Suitable for small datasets or scenarios where explicit iteration over groups is required.

4. **Alternative Approach**:
   - For larger datasets, consider using the `dplyr` package's vectorized operations to achieve the same result efficiently.

---

#### Dependencies

- R (version 4.0 or later)
- `dplyr` package

Install `dplyr` if not already installed:

```R
install.packages("dplyr")
```

---

#### How to Run

1. Copy the code into an R script or R Markdown file.
2. Load your dataset into a DataFrame named `df`.
3. Run the script to filter the dataset and view the result.

