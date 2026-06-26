-- =============================================================================
-- init.lua  –  Neovim configuration
-- Drop this at: ~/.config/nvim/init.lua   (Linux/Mac)
--               %LOCALAPPDATA%\nvim\init.lua  (Windows)
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. BOOTSTRAP lazy.nvim (plugin manager)
-- ---------------------------------------------------------------------------
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git", "clone", "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- ---------------------------------------------------------------------------
-- 2. OPTIONS
-- ---------------------------------------------------------------------------
local opt = vim.opt

opt.backup         = false
opt.writebackup    = false
opt.swapfile       = false

opt.number         = true
opt.relativenumber = true

opt.undofile       = true
opt.undodir        = vim.fn.stdpath("data") .. "/undo"

opt.tabstop        = 4
opt.softtabstop    = 4
opt.shiftwidth     = 4
opt.expandtab      = true
opt.smartindent    = true

opt.hlsearch       = true
opt.incsearch      = true
opt.ignorecase     = true
opt.smartcase      = true

-- ---------------------------------------------------------------------------
-- 3. PLUGINS
-- ---------------------------------------------------------------------------
require("lazy").setup({

  -- File tree — loads only when toggled
  {
    "nvim-tree/nvim-tree.lua",
    dependencies = { "nvim-tree/nvim-web-devicons" },
    config = function()
      require("nvim-tree").setup()
    end,
  },

  -- Terminal — loads only when opened
  {
    "akinsho/toggleterm.nvim",
    version = "*",
    cmd  = "ToggleTerm",
    keys = { { [[<C-\>]], "<cmd>ToggleTerm<cr>", desc = "Toggle terminal" } },
    config = function()
      if vim.fn.has("win32") == 1 then
        local powershell_options = {
          shell        = vim.fn.executable("pwsh") == 1 and "pwsh" or "powershell",
          shellcmdflag = "-NoLogo -ExecutionPolicy RemoteSigned -Command [Console]::InputEncoding=[Console]::OutputEncoding=[System.Text.UTF8Encoding]::new();$PSDefaultParameterValues['Out-File:Encoding']='utf8';",
          shellredir   = "2>&1 | Out-File -Encoding UTF8 %s",
          shellpipe    = "2>&1 | Out-File -Encoding UTF8 %s",
          shellquote   = "",
          shellxquote  = "",
        }
        for option, value in pairs(powershell_options) do
          vim.o[option] = value
        end
      end

      require("toggleterm").setup({
        size             = 20,
        open_mapping     = [[<C-\>]],
        hide_numbers     = true,
        shade_filetypes  = {},
        shade_terminals  = true,
        shading_factor   = 2,
        start_in_insert  = true,
        insert_mappings  = true,
        terminal_mappings = true,
        persist_size     = true,
        persist_mode     = true,
        direction        = "horizontal",
        close_on_exit    = true,
        shell            = vim.o.shell,
        float_opts       = { border = "curved", winblend = 3 },
      })

      function _G.set_terminal_keymaps()
        local o = { buffer = 0 }
        vim.keymap.set("t", "<esc><esc>", [[<C-\><C-n>]],          o)
        vim.keymap.set("t", "<C-h>",      [[<Cmd>wincmd h<CR>]],   o)
        vim.keymap.set("t", "<C-j>",      [[<Cmd>wincmd j<CR>]],   o)
        vim.keymap.set("t", "<C-k>",      [[<Cmd>wincmd k<CR>]],   o)
        vim.keymap.set("t", "<C-l>",      [[<Cmd>wincmd l<CR>]],   o)
      end
      vim.cmd("autocmd! TermOpen term://* lua set_terminal_keymaps()")
    end,
  },

  -- LSP
  { "neovim/nvim-lspconfig" },

  -- Mason — loads only when its commands are used
  {
    "williamboman/mason.nvim",
    cmd    = { "Mason", "MasonInstall", "MasonUpdate", "MasonUninstall" },
    config = true,
  },
  {
    "williamboman/mason-lspconfig.nvim",
    dependencies = { "williamboman/mason.nvim" },
    cmd    = { "Mason", "MasonInstall" },
    config = true,
  },

  -- Autocompletion — loads only on entering insert mode
  {
    "hrsh7th/nvim-cmp",
    event = "InsertEnter",
    dependencies = {
      "hrsh7th/cmp-nvim-lsp",
      "hrsh7th/cmp-buffer",
      "hrsh7th/cmp-path",
      "L3MON4D3/LuaSnip",
      "saadparwaiz1/cmp_luasnip",
    },
    config = function()
      local cmp     = require("cmp")
      local luasnip = require("luasnip")

      cmp.setup({
        snippet = {
          expand = function(args) luasnip.lsp_expand(args.body) end,
        },
        mapping = cmp.mapping.preset.insert({
          ["<Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
              cmp.select_next_item()
            elseif luasnip.expand_or_jumpable() then
              luasnip.expand_or_jump()
            else
              fallback()
            end
          end, { "i", "s" }),

          ["<S-Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
              cmp.select_prev_item()
            elseif luasnip.jumpable(-1) then
              luasnip.jump(-1)
            else
              fallback()
            end
          end, { "i", "s" }),

          ["<CR>"]      = cmp.mapping.confirm({ select = true }),
          ["<C-Space>"] = cmp.mapping.complete(),
        }),
        sources = cmp.config.sources({
          { name = "nvim_lsp" },
          { name = "luasnip" },
          { name = "buffer" },
          { name = "path" },
        }),
      })
    end,
  },

  -- Treesitter — loads on first real buffer
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    event = { "BufReadPost", "BufNewFile" },
    main  = "nvim-treesitter",
    opts  = {
      highlight    = { enable = true },
      indent       = { enable = true },
      auto_install = false,
    },
  },

  -- Telescope — loads only when its keys or commands are used
  {
    "nvim-telescope/telescope.nvim",
    version      = "*",
    cmd          = "Telescope",
    keys = {
      { "<leader>ff", "<cmd>Telescope find_files<cr>",  desc = "Telescope find files" },
      { "<leader>fg", "<cmd>Telescope live_grep<cr>",   desc = "Telescope live grep"  },
      { "<leader>fb", "<cmd>Telescope buffers<cr>",     desc = "Telescope buffers"    },
      { "<leader>fh", "<cmd>Telescope help_tags<cr>",   desc = "Telescope help tags"  },
    },
    dependencies = {
      "nvim-lua/plenary.nvim",
      { "nvim-telescope/telescope-fzf-native.nvim", build = "make" },
    },
  },

})

-- ---------------------------------------------------------------------------
-- 4. LSP SETUP
-- ---------------------------------------------------------------------------

-- Mason binaries on PATH
vim.env.PATH = vim.fn.stdpath("data") .. "/mason/bin"
  .. (vim.fn.has("win32") == 1 and ";" or ":")
  .. vim.env.PATH

local capabilities = require("cmp_nvim_lsp").default_capabilities()

vim.lsp.config("lua_ls", {
  cmd          = { "lua-language-server" },
  filetypes    = { "lua" },
  capabilities = capabilities,
  settings = {
    Lua = {
      runtime     = { version = "LuaJIT" },
      diagnostics = { globals = { "vim" } },
      workspace   = { library = vim.api.nvim_get_runtime_file("", true), checkThirdParty = false },
      telemetry   = { enable = false },
    },
  },
})

vim.lsp.config("ts_ls", {
  cmd          = { "typescript-language-server", "--stdio" },
  filetypes    = { "javascript", "javascriptreact", "typescript", "typescriptreact" },
  capabilities = capabilities,
})

vim.lsp.config("pyright", {
  cmd          = { "pyright-langserver", "--stdio" },
  filetypes    = { "python" },
  capabilities = capabilities,
})

vim.lsp.enable({ "lua_ls", "ts_ls", "pyright" })

vim.api.nvim_create_autocmd("LspAttach", {
  group = vim.api.nvim_create_augroup("UserLspKeys", {}),
  callback = function(ev)
    local map = function(mode, lhs, rhs, desc)
      vim.keymap.set(mode, lhs, rhs, { buffer = ev.buf, silent = true, desc = desc })
    end
    map("n", "gd",         vim.lsp.buf.definition,      "Go to definition")
    map("n", "gy",         vim.lsp.buf.type_definition, "Go to type definition")
    map("n", "gi",         vim.lsp.buf.implementation,  "Go to implementation")
    map("n", "gr",         vim.lsp.buf.references,      "Go to references")
    map("n", "K",          vim.lsp.buf.hover,           "Show hover docs")
    map("n", "<leader>rn", vim.lsp.buf.rename,          "Rename symbol")
    map("n", "[g",         vim.diagnostic.goto_prev,    "Previous diagnostic")
    map("n", "]g",         vim.diagnostic.goto_next,    "Next diagnostic")
  end,
})

-- ---------------------------------------------------------------------------
-- 5. KEYMAPS
-- ---------------------------------------------------------------------------

vim.keymap.set("n", "<C-n>", ":NvimTreeToggle<CR>", { silent = true, desc = "Toggle file tree" })
vim.keymap.set("n", "<Esc>", ":nohlsearch<CR>",     { silent = true })

-- ---------------------------------------------------------------------------
-- 6. LAST-TAB TRACKING
-- ---------------------------------------------------------------------------
local last_tab = 1

vim.api.nvim_create_autocmd("TabLeave", {
  group = vim.api.nvim_create_augroup("LastTab", { clear = true }),
  callback = function()
    last_tab = vim.fn.tabpagenr()
  end,
})

vim.api.nvim_create_autocmd("TabClosed", {
  group = "LastTab",
  callback = function()
    local total  = vim.fn.tabpagenr("$")
    local target = math.min(last_tab, total)
    vim.cmd("tabn " .. target)
  end,
})
