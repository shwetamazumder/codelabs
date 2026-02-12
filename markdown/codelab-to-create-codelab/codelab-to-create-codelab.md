id: codelab-to-create-codelab
title: Template to Create Codelabs
summary: Learn how to add new Codelabs
categories: codelabs, setup
tags: beginner
difficulty: 1
status: published
authors: Your Team
feedback_link: https://github.com/qnx/codelabs/issues

# How to Create Your Own Codelab and Contribute to QNX

## Welcome
Duration: 2:00

This codelab will show you **how to create your own Codelab** and contribute to QNX.  
We use the open-source **Google Codelabs Tools** to author codelabs.

---

## Workflow
Duration: 3:00

High-level workflow for creating a codelab:

1. **Setup your system** – Install IDE/editor, Go, and any necessary tools.  
2. **Write your codelab** – Draft content in markdown, include code snippets, videos, and instructions.  
3. **Build/preview locally** (optional) – Use Claat to generate HTML and verify formatting.  
4. **Contribute your codelab** – Push your changes to a branch on GitHub and create a pull request.

**Flow Diagram**  
*(Add a visual workflow diagram here if available)*

---

## Setup Environment
Duration: 5:00

### Pre-requisites

1. **Download an IDE or Editor** – VS Code is recommended.  
2. **Learn GitHub Basics:** [Learn GitHub](https://docs.github.com/en/get-started/quickstart/hello-world)  
3. **Install Go** (needed if using Claat)
    ```bash
    export PATH=$PATH:/usr/local/go/bin
    export GOPATH=$HOME/go
    export PATH=$PATH:$GOPATH/bin
    ```
4. **Build or install Claat** to view your markdown file locally as a static HTML (optional).

---

### Build Claat from Source

1. Clone the customized QNX Claat repo:
    ```bash
    git clone https://github.com/qnx/tools.git
    ```
2. Navigate to the Claat folder:
    ```bash
    cd tools/claat
    ```
3. Build Claat:
    ```bash
    go install
    ```
> Running `go install` compiles Claat and places the executable in `$GOPATH/bin`.

---

## Guidelines for Creating Codelabs
Duration: 4:00

- Focus on **one specific goal** per codelab.  
- Add an **Introduction** describing the codelab purpose and outcome.  
- Include a **System Setup** section for pre-requisites.  
- Use **code snippets** and **videos** where necessary.  
- Break content into **small, independent sections**.  
- Always create a **GitHub branch** for your contributions.

---

## Setup GitHub
Duration: 3:00

1. Clone the QNX codelabs repo:
    ```bash
    git clone https://github.com/qnx/codelabs.git
    ```
2. If using SSH:
    ```bash
    git clone git@github.com:qnx/codelabs.git
    ```
3. Work on a **new branch** when creating or editing codelabs.

---

## Next Steps
Duration: 2:00

You are now ready to start creating your own codelabs.  
Follow the guidelines above and submit your codelab as a GitHub pull request.
