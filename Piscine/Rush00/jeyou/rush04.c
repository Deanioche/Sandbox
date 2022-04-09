/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush04.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jeyou <jeyou@student.42seoul.kr>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/05 18:15:15 by jeyou             #+#    #+#             */
/*   Updated: 2022/02/06 19:14:50 by hankim           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_putchar(char c);

void	print_header(int x)
{
	int	i;

	ft_putchar('A');
	i = 1;
	while (i < x - 1)
	{
		ft_putchar('B');
		i++;
	}
	if (x >= 2)
		ft_putchar('C');
}

void	print_footer(int x)
{
	int	i;

	ft_putchar('C');
	i = 1;
	while (i < x - 1)
	{
		ft_putchar('B');
		i++;
	}
	if (x >= 2)
		ft_putchar('A');
}

void	print_middle(int x)
{
	int	i;

	ft_putchar('B');
	i = 1;
	while (i < x - 1)
	{
		ft_putchar(' ');
		i++;
	}
	if (x >= 2)
		ft_putchar('B');
}

void	rush(int x, int y)
{
	int	i;

	if (y <= 0 || x <= 0)
		return ;
	print_header(x);
	i = 1;
	while (i < y - 1)
	{
		ft_putchar('\n');
		print_middle(x);
		i++;
	}
	if (y >= 2)
	{
		ft_putchar('\n');
		print_footer(x);
	}
}
