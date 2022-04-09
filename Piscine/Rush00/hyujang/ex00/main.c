/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hyujang <hyujang@42seoul.kr>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/06 16:19:44 by hyujang           #+#    #+#             */
/*   Updated: 2022/02/06 16:51:07 by hasuh            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void	rush(int a, int b);
int		arg_to_nbr(char *str);
void	set_max_integer(char *str);
int		is_integer_range(char *str);
int		argv_length(char *str);

int	main(int argc, char *argv[])
{
	int	x;
	int	y;

	if (argc != 3)
	{
		write(1, "ERROR!!\narguments must be two inputs\n", 37);
		return (0);
	}
	x = is_integer_range(argv[1]);
	y = is_integer_range(argv[2]);
	if (x < 0 || y < 0)
		write(1, "ERROR!!\narguments must be positive integer\n", 43);
	else
	{
		x = arg_to_nbr(argv[1]);
		y = arg_to_nbr(argv[2]);
		if (x == 0 || y == 0)
			write(1, "ERROR!!\narguments must be positive integer\n", 43);
		else
			rush(x, y);
	}
	return (0);
}

int	arg_to_nbr(char *str)
{
	int	i;
	int	nbr;

	i = 0;
	nbr = 0;
	while (str[i] != 0)
	{
		if (!('0' <= str[i] && str[i] <= '9'))
			return (-1);
		nbr = (nbr * 10) + (str[i] - '0');
		i++;
	}
	return (nbr);
}

void	set_max_integer(char *str)
{
	str[0] = '2';
	str[1] = '1';
	str[2] = '4';
	str[3] = '7';
	str[4] = '4';
	str[5] = '8';
	str[6] = '3';
	str[7] = '6';
	str[8] = '4';
	str[9] = '7';
}

int	is_integer_range(char *str)
{
	char	max[10];
	int		i;
	int		len;

	set_max_integer(max);
	len = argv_length(str);
	if (len <= 0)
		return (-1);
	else if (len > 10)
		return (-2);
	else if (len == 10)
	{
		i = 0;
		while (str[i] != 0)
		{
			if (str[i] > max[i])
				return (-3);
			i++;
		}
	}
	return (0);
}

int	argv_length(char *str)
{
	int		i;

	i = 0;
	while (str[i] != 0)
	{
		if (!('0' <= str[i] && str[i] <= '9'))
			return (-1);
		i++;
	}
	return (i);
}
