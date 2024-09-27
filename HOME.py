import streamlit as st

# Title and favicon
st.set_page_config(page_title="Faculty Enrichment Program in Applied Malaria Modeling")
                   

# Sidebar Configuration
st.sidebar.title("Faculty Enrichment Program in Applied Malaria Modeling")

st.sidebar.write("### Quick Links:")
st.sidebar.markdown("[--- EMOD Documentation](https://docs.idmod.org/projects/emod-malaria/en/latest/)")
st.sidebar.markdown("[--- NU Malaria Modeling](https://numalariamodeling.org)")
st.sidebar.markdown("[--- AMMnet](https://ammnet.org/)")
st.sidebar.markdown("<br><span style='color: red; font-weight:bold;'>Voir le Site en Français</span>", unsafe_allow_html=True)
st.sidebar.markdown("[French Website](https://numalariamodeling.github.io/FE-2023-site-web-francais/)")

# Main Content
st.title("Faculty Enrichment Program in Applied Malaria Modeling")

# Sections
section = st.sidebar.radio("Select a Section:", 
                            ["2023 Program", "EMOD How-To Guides", "Additional Resources"])

if section == "2023 Program":
    st.header("2023 Program")
    st.write("## Program Resources")
    st.markdown("### Pre-Program Checklist")
    st.markdown("[Pre-Program Checklist](program/program_resources/pre_program_checklist.qmd)")
    st.markdown("### Program Handbook")
    st.markdown("[2023 Program Handbook](program/program_resources/program_materials/2023_program_handbook.qmd)")
    st.markdown("### Best Practices")
    st.markdown("[NU Team Best Practices](program/program_resources/program_materials/nu_team_best_practices.qmd)")
    st.markdown("### Example Exercises")
    st.markdown("[Example Exercises](https://github.com/numalariamodeling/FE-2023-examples)")
    st.markdown("### Journal Club")
    st.markdown("[Journal Club](resources/articles/journal_club.qmd)")
    st.markdown("### Session Recordings")
    st.markdown("[Session Recordings](program/program_resources/session_recordings.qmd)")

elif section == "EMOD How-To Guides":
    st.header("EMOD How-To Guides")
    guides = [
        "Install Guide",
        "Simulation Guide",
        "Demographics Guide",
        "Climate Guide",
        "Vector Guide",
        "Diagnostic Guide",
        "Intervention Guide",
        "Report Guide",
        "Analyzer Guide",
        "Properties Guide",
    ]
    for guide in guides:
        st.markdown(f"[{guide}](guides/{guide.lower().replace(' ', '_')}.qmd)")

elif section == "Additional Resources":
    st.header("Additional Resources")
    resources = [
        "Articles",
        "Coding Resources",
        "Data Sources",
        "Science Communication"
    ]
    for resource in resources:
        st.markdown(f"[{resource}](resources/{resource.lower().replace(' ', '_')}.qmd)")

# Footer
st.markdown("© NU Malaria Modeling 2023")
